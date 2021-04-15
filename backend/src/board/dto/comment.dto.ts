import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';
import { Board } from '../entities/board.entity';

export class CreateCommentDTO {
  @IsString()
  readonly content: string;

  @IsString()
  readonly author: string;

  @IsString()
  readonly topic: string;

  @IsInt()
  readonly boardId: number;

  @IsInt()
  readonly parentId: number;
}

export class UpdateCommentDTO extends PartialType(CreateCommentDTO) {
  @IsString()
  readonly content: string;

  @IsString()
  readonly author: string;

  @IsString()
  readonly topic: string;

  @IsString()
  readonly parentId: number;
}
