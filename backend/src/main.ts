import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // DTO 의 클래스 유효성검사 기능 추가
  app.useGlobalPipes(new ValidationPipe({
    //whitelist : DTO에서 Decorator가 없는 Field는 거릅니다.
    whitelist: true,
    forbidNonWhitelisted: true,
    //Request Body를 원하는 타입으로 자동변환 해줌 number of string ...
    transform: true
  }));  
  app.enableCors();
  await app.listen(8080); 
}
bootstrap();
  