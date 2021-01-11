import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class UpdateUserDTO extends PartialType(CreateUserDTO){  
  @IsString() 
  readonly user_id: string; 
  @IsString() 
  readonly password?: string;
  @IsString()
  readonly nickname?: string;
  
  // @IsNumber()
  // readonly level?: number; 
  
}