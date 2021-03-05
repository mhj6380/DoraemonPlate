import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateMessageDTO } from './dto/create-message.dto';
// import { ChatMessage } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/test')
  test(): Promise<void> {
    return this.chatService.test();
  }

  // 채팅 메세지 로그 생성
  @Post('/message')
  createMessage(@Body() messageData: CreateMessageDTO) {
    return this.chatService.createMessage(messageData);
  }

  // room_key 로 기존 채팅메세지 가져오기
  @Get('/message/:room_key')
  getMessages(@Param('room_key') room_key: string) {
    return this.chatService.getMessages(room_key);
  }
}
