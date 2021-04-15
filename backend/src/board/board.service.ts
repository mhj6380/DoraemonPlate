import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board, Comment, Like, Scrap } from './entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDTO } from './dto/update-board.dto';
import { CreateCommentDTO } from './dto/comment.dto';
import { CreateLikeDTO } from './dto/like.dto';
import { CreateScrapDTO } from './dto/scrap.dto';
import { BoardItemsPaginationDTO } from './dto/board-pageination-result.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(Scrap)
    private readonly scrapRepository: Repository<Scrap>,
  ) {}

  async getCommentChildrens(parentId): Promise<Comment[]> {
    const childrens = await this.commentRepository
      .createQueryBuilder('boardComment')
      .leftJoinAndSelect('boardComment.authorInfo', 'authorInfo')
      .where('boardComment.parentId = :parentId', { parentId })
      .getMany();

    return childrens;
  }

  async createBoard(boardData: CreateBoardDTO): Promise<Board> {
    const board = new Board();

    board.title = boardData.title;
    board.content = boardData.content;
    board.author = boardData.author;
    board.thumbnail = boardData.thumbnail;

    await this.boardRepository.save(board);

    return board;
  }

  async updateBoard(updateData: UpdateBoardDTO): Promise<void> {
    await this.boardRepository.update({ id: updateData.id }, updateData);
  }

  async getOne(id: number): Promise<Board> {
    // const boardWithComments = await this.boardRepository
    //   .createQueryBuilder('board')
    //   .leftJoinAndSelect('board.authorInfo', 'authorInfo')
    //   .leftJoinAndSelect(
    //     'board.comments',
    //     'comments',
    //     'comments.isChildren = :isChildren',
    //     { isChildren: 0 },
    //   )
    //   .where('board.id = :id', { id })
    //   .getOne();

    const boards = await this.boardRepository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.authorInfo', 'authorInfo')
      .where('board.id = :id', { id })
      .getOne();

    const comments = await this.commentRepository
      .createQueryBuilder('boardComment')
      .leftJoinAndSelect('boardComment.authorInfo', 'authorInfo')
      .where('boardComment.boardId = :boardId', { boardId: id })
      .where('boardComment.isChildren = :isChildren', { isChildren: 0 })
      .getMany();

    boards.comments = comments;

    if (!boards) throw new NotFoundException(`Not Found Board ID:${id}`);

    return boards;
  }

  async deleteBoard(id: number): Promise<any> {
    const board = await this.getOne(id);
    await this.boardRepository.delete({ id: board.id });
  }

  //댓글 생성
  async createComment(commentData: CreateCommentDTO): Promise<void> {
    const comment = new Comment();

    if (commentData.parentId > 0) {
      const parent = await this.commentRepository.findOne({
        id: commentData.parentId,
      });

      //대댓글 수 ++
      await this.commentRepository.increment(
        { id: commentData.parentId },
        'childCount',
        1,
      );

      // 대댓글인 경우
      comment.content = commentData.content;
      comment.author = commentData.author;
      comment.topic = commentData.topic;
      comment.boardId = commentData.boardId;
      comment.parent = parent;
      comment.isChildren = true;

      await this.commentRepository.save(comment);
    } else {
      // 일반 댓글인 경우
      comment.content = commentData.content;
      comment.author = commentData.author;
      comment.topic = commentData.topic;
      comment.boardId = commentData.boardId;
      comment.isChildren = false;

      await this.commentRepository.save(comment);
    }
  }

  // 댓글 수정
  async updateComment(updateData: UpdateBoardDTO): Promise<void> {
    console.log(updateData);
    await this.boardRepository.update({ id: updateData.id }, updateData);
  }

  async getBoardList(
    topic: string,
    page: number,
    limit: number,
  ): Promise<BoardItemsPaginationDTO> {
    const skippedItems = (page - 1) * limit;
    const totalCount = await this.boardRepository.count();
    const boardItems = await this.boardRepository
      .createQueryBuilder()
      .where('topic=:topic', { topic })
      .orderBy('createdAt', 'DESC')
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page,
      limit,
      data: boardItems,
    };
  }

  //조회 수 증가
  async incrementViewCount(id: number): Promise<void> {
    await this.boardRepository.increment({ id }, 'viewCount', 1);
  }

  async actionLike(likeData: CreateLikeDTO): Promise<boolean> {
    const { userId, boardId } = likeData;
    const current = await this.likeRepository.findOne({ userId, boardId });

    //토글 형태
    if (current) {
      // 이미 있을경우 제거 & 카운트 --
      await this.likeRepository.remove(current);
      await this.boardRepository.decrement({ id: boardId }, 'likeCount', 1);
      return false;
    } else {
      // 없을경우 추가 & 카운트 ++
      const like = new Like();
      like.userId = userId;
      like.boardId = boardId;

      await this.likeRepository.save(like);
      await this.boardRepository.increment({ id: boardId }, 'likeCount', 1);
      return true;
    }
  }

  async actionScrap(scrapData: CreateScrapDTO): Promise<boolean> {
    const { userId, boardId } = scrapData;
    const current = await this.scrapRepository.findOne({ userId, boardId });

    //토글 형태
    if (current) {
      // 이미 있을경우 제거 & 카운트 --
      await this.scrapRepository.remove(current);
      await this.boardRepository.decrement({ id: boardId }, 'scrapCount', 1);

      return false;
    } else {
      const scrap = new Scrap();
      scrap.userId = scrapData.userId;
      scrap.boardId = scrapData.boardId;

      await this.scrapRepository.save(scrap);
      await this.boardRepository.increment(
        { id: scrapData.boardId },
        'scrapCount',
        1,
      );

      return true;
    }
  }

  //공유 수 증가
  async incrementShareCount(id: number): Promise<void> {
    await this.boardRepository.increment({ id }, 'shareCount', 1);
  }

  //댓글 생성
  async test(): Promise<void> {
    const parentComm = await this.commentRepository.findOne({ id: 3 });

    const test = new Comment();
    test.content = 'TEST';
    test.author = 'TEST';
    test.topic = 'TESST';
    test.parent = parentComm;
    await this.commentRepository.save(test);

    const test2 = new Comment();
    test2.content = 'test2';
    test2.author = 'test2';
    test2.topic = 'TESST';
    test2.parent = test;
    await this.commentRepository.save(test2);
  }
}
