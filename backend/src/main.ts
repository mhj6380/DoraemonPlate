import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as fs from 'fs';

async function bootstrap() {
  // const fs = require('fs');
  // const keyFile = fs.readFileSync(
  //   '/etc/letsencrypt/live/99link.kr/privkey.pem',
  // );
  // const certFile = fs.readFileSync(
  //   '/etc/letsencrypt/live/99link.kr/fullchain.pem',
  // );

  // console.log('!- keyFile', keyFile);
  // console.log('!- certFile', certFile);

  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions: {
  //     key: keyFile,
  //     cert: certFile,
  //   },
  // });

  // DTO 의 클래스 유효성검사 기능 추가
  app.useGlobalPipes(
    new ValidationPipe({
      //whitelist : DTO에서 Decorator가 없는 Field는 거릅니다.
      whitelist: true,
      forbidNonWhitelisted: true,
      //Request Body를 원하는 타입으로 자동변환 해줌 number of string ...
      transform: true,
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API DOCS EXAMPLE!')
    .setDescription('API 문서입니다.')
    .setVersion('0.0.1')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();
  // .addTag('TEST')

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
