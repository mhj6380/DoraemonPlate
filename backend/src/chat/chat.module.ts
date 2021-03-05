import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage, ChatRoom } from './entities/chat.entity';
import { User, Tweet } from './entities/test.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatMessage, ChatRoom, User, Tweet]),
    ConfigModule,
  ],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
