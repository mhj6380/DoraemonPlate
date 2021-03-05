import { IsString, IsInt } from 'class-validator';

export class CreateLikeDTO {
  @IsString()
  readonly userId: string;

  @IsInt()
  readonly boardId: number;
}
