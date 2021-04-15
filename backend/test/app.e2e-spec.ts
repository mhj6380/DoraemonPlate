import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Doraemon Plate Backend v.0.0.1');
  });

  describe('AUTH', () => {
    it.todo('Get All Users');
    it.todo('Registry One User');
    it.todo('Check Get One User');
    it.todo('Get Delete User');
    it.todo('Check Get One User');

    let accessToken: string;

    it('GET', () => {
      return request(app.getHttpServer()).get('/auth').expect(200);
    });
    it('Register 201', async () => {
      const result = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          user_id: 'TEST',
          password: 'testpassword',
          nickname: '하악구',
        })
        .expect(201);

      accessToken = result.body.access_token;

      return result;
    });

    it('회원가입 성공 400', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          user_id: 'TEST',
          password: 'testpassword',
          nickname: '하악구',
          other: 'hacking',
        })
        .expect(400);
    });

    it('PATCH', () => {
      return request(app.getHttpServer())
        .patch('/auth/TEST')
        .send({ user_id: 'TEST', password: '1111' })
        .expect(200);
    });

    it('회원 정보 조회 401 Unauthorized', () => {
      return request(app.getHttpServer()).get('/auth/TEST').expect(401);
    });

    it('회원 정보 조회 성공 201', () => {
      return request(app.getHttpServer())
        .get('/auth/TEST')
        .set('Authorization', 'bearer ' + accessToken)
        .expect(200);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/auth/TEST').expect(200);
    });

    it('회원 정보 조회 실패 404 NotFound', () => {
      return request(app.getHttpServer())
        .get('/auth/TEST')
        .set('Authorization', 'bearer ' + accessToken)
        .expect(404);
    });
  });

  describe('Board', () => {
    it.todo('게시판 CRUD');
    it.todo('게시판 Exeption');
    it.todo('댓글 CRUD');
    it.todo('댓글 Exeption');
    it.todo('게시판 좋아요');
    it.todo('게시판 스크랩');
    it.todo('게시판 공유');

    let board01_inserted_id: number;

    it('게시물 글쓰기 201', async () => {
      const result: any = await request(app.getHttpServer())
        .post('/board')
        .send({
          topic: 'default',
          title: '테스트 게시물',
          content: '게시물 내용입니다.',
          author: 'test@gmail.com',
          thumbnail: '',
          tags: '',
        })
        .expect(201);

      // 생성된 게시물 id 저장
      board01_inserted_id = result.body.id;

      return result;
    });

    it('게시물 조회 200', () => {
      return request(app.getHttpServer())
        .get(`/board/${board01_inserted_id}`)
        .expect(200);
    });

    it('게시물 조회 404', () => {
      return request(app.getHttpServer())
        .get(`/board/9999999999999999`)
        .expect(404);
    });

    it('게시물 수정 200', () => {
      return request(app.getHttpServer())
        .patch('/board')
        .send({
          id: board01_inserted_id,
          topic: 'default',
          title: '테스트 게시물-수정',
          content: '게시물 내용입니다.-수정',
          thumbnail: 'editThumb.jpg',
          tags: 'editTag',
        })
        .expect(200);
    });

    // 좋아요 테스트 추가예정
    // 스크랩 테스트 추가예정
    // 공유수 증가 테스트 추가예정

    it('수정된 데이터 검증', (done) => {
      return request(app.getHttpServer())
        .get(`/board/${board01_inserted_id}`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body.title).toBe('테스트 게시물-수정');
          expect(res.body.content).toBe('게시물 내용입니다.-수정');
          expect(res.body.thumbnail).toBe('editThumb.jpg');
          expect(res.body.tags).toBe('editTag');
          // console.log('res.body !!', res.body);
          return done();
        });
    });
  });

  // describe('/auth/:id', () => {
  // })
});
