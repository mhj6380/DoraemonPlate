import {
  Controller,
  Body,
  Post,
  Delete,
  Patch,
  Param,
  Get,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDTO } from './dto/update-board.dto';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/comment.dto';
import { Board, Comment } from './entities/board.entity';
import { CreateLikeDTO } from './dto/like.dto';
import { CreateScrapDTO } from './dto/scrap.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/test')
  test() {
    return this.boardService.test();
  }

  @Post('/')
  createBoard(@Body() boardData: CreateBoardDTO): Promise<Board> {
    return this.boardService.createBoard(boardData);
  }

  @Patch('/')
  updateBoard(@Body() boardData: UpdateBoardDTO) {
    return this.boardService.updateBoard(boardData);
  }

  @Post('/comment')
  createComment(@Body() boardData: CreateCommentDTO) {
    return this.boardService.createComment(boardData);
  }

  @Patch('/comment')
  updateComment(@Body() boardData: UpdateBoardDTO) {
    return this.boardService.updateComment(boardData);
  }

  @Get('/comment-childrens/:parentId')
  getCommentChildrens(@Param('parentId') parentId: number): Promise<Comment[]> {
    return this.boardService.getCommentChildrens(parentId);
  }

  @Get('/feed/:offset/:limit')
  getBoardList(
    @Param('offset') offset: number,
    @Param('limit') limit: number,
  ): Promise<Board[]> {
    return this.boardService.getBoardList(offset, limit);
  }

  @Patch('/view-increment/:bo_id')
  incrementViewCount(@Param('bo_id') bo_id: number): Promise<void> {
    return this.boardService.incrementViewCount(bo_id);
  }

  @Post('/like')
  actionLike(@Body() likeData: CreateLikeDTO): Promise<boolean> {
    return this.boardService.actionLike(likeData);
  }

  @Post('/scrap')
  actionScrap(@Body() scrapData: CreateScrapDTO): Promise<boolean> {
    return this.boardService.actionScrap(scrapData);
  }

  @Patch('/share-increment/:bo_id')
  incrementShareCount(@Param('bo_id') bo_id: number): Promise<void> {
    return this.boardService.incrementShareCount(bo_id);
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.boardService.getOne(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: number) {
    return this.boardService.deleteBoard(id);
  }
}
