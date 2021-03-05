import { IsString, IsDate } from 'class-validator';

export class CreateMessageDTO { 
  @IsString()
  readonly room_key: string;

  @IsString()
  readonly message: string; 
  
  @IsString()
  readonly from_user: string; 

  @IsString()
  readonly to_user: string;

  @IsString()
  readonly nickname: string;

  @IsString()
  readonly profile: string;
 
  @IsString() 
  readonly insert_datetime: string; 

  @IsString()
  readonly message_type: string; 

  @IsString()
  readonly source: string;


}
