import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly nickname: string;
  
  // @IsNumber()  
  // readonly level: number;   
  
}