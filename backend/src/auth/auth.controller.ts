import { Controller,Delete,Get, Param, Post,Patch, Body,UseGuards,Req } from '@nestjs/common'; 
import { AuthService } from './auth.service'; 
import { LoginUserDTO } from './dto/login-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto'; 
import { User } from "./entities/auth.entity"; 
import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: AuthService
  ) { }
  @Get('/temp')
  @UseGuards(AuthGuard('jwt'))
  tempAuth() {
    return {auth:'works'}
    }
  
  @Get()
  getAll():Promise<User[]> {
    return this.userService.getAll();   
  } 

  @Post('/register') 
  register(@Body() userData:CreateUserDTO) {   
    return this.userService.register(userData); 
  }

  @UseGuards(AuthGuard('local')) 
  @Post('/login')  
  login(@Body() userData: LoginUserDTO): Promise<any>  {
    return this.userService.login(userData);   
  }


  @Get('/:user_id')  
  getOneUser(@Param("user_id") user_id: string): Promise<User>{
    return this.userService.getOne(user_id);   
  } 


 
  @Delete("/:user_id")
  delete(@Param("user_id") user_id: string) {     
    return this.userService.delete(user_id);   
  }
  
  @Patch('/:user_id') 
  patch(@Param("user_id") user_id: string, @Body() updateData:UpdateUserDTO) { 
    return this.userService.update(user_id, updateData); 
  }
}
   