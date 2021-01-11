import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;  

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));  
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

    it('GET', () => {
      return request(app.getHttpServer())
        .get('/auth')
        .expect(200)
    });
    it('Register 201', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          user_id: "TEST",
          password: "testpassword",
          nickname:"하악구"
        })
        .expect(201)
    });


    it('Register 400', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({
          user_id: "TEST",
          password: "testpassword",
          nickname: "하악구",
          other:"hacking"
        })
        .expect(400)
    });

    it('PATCH', () => {
      return request(app.getHttpServer())
        .patch('/auth/TEST')
        .send({user_id:"TEST",password:"1111"})
        .expect(200)
    })

    it('GET User (Created)', () => {
      return request(app.getHttpServer())
        .get('/auth/TEST')
        .expect(200)
    })

    it('DELETE', () => {
      return request(app.getHttpServer())
      .delete('/auth/TEST').expect(200)
    })

    it('GET User (Deleted)', () => {
      return request(app.getHttpServer())
        .get('/auth/TEST')
        .expect(404)
    })
  }) 

  // describe('/auth/:id', () => {
  // })
});


