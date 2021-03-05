import { IsString, IsInt } from 'class-validator';

export class CreateScrapDTO {
  @IsString()
  readonly userId: string;

  @IsInt()
  readonly boardId: number;
}
