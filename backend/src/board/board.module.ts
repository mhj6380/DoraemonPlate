import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board, Comment, Like, Scrap } from './entities/board.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board, Comment, Like, Scrap]),
    ConfigModule,
  ],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
