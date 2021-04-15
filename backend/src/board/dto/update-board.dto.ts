import { IsString, IsInt, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDTO } from './create-board.dto';

export class UpdateBoardDTO extends PartialType(CreateBoardDTO) {
  @IsString()
  readonly topic: string;

  @IsInt()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly author?: string;

  @IsString()
  readonly thumbnail?: string;

  @IsString()
  readonly tags?: string;
}
