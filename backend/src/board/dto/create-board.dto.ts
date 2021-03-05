import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';

export class CreateBoardDTO {
  @IsString()
  readonly topic: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly author: string;

  @IsString()
  readonly thumbnail?: string;

  @IsString()
  readonly tags?: string;

  // @IsString()
  // readonly createAt: string;
}
