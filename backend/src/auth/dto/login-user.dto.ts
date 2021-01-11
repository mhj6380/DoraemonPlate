import { IsString } from 'class-validator';

export class LoginUserDTO {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly password: string;
  
}