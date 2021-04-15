import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { LoginUserDTO } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService, // ConfigService 불러오기
  ) {}

  // 회원가입 Validation
  async existsByUserId(user_id: string): Promise<any> {
    const user = await this.userRepository.findOne({ user_id: user_id || '' });

    if (user) {
      throw new ConflictException(
        '이미 존재하는 계정입니다. 다른 정보를 입력해 주세요.',
      );
    }

    return null;
  }

  // 로그인 Validation
  async validateUser(user_id: string, pass: string): Promise<any> {
    const user = await this.getOne(user_id);

    if (!bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호를 다시 확인하세요. 이메일 또는 비밀번호를 잘못 입력하셨습니다.',
      );
    }
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async register(userData: CreateUserDTO) {
    await this.existsByUserId(userData.user_id);

    const user = new User();
    user.user_id = userData.user_id;
    user.password = userData.password;
    user.nickname = userData.nickname;
    await this.userRepository.save(user);

    const accessToken = await this.jwtService.signAsync({
      user_id: userData.user_id,
    });
    const refreshToken = await this.jwtService.signAsync({
      user_id: userData.user_id,
    });

    console.log('REGISTER DEBUG!');
    console.log(accessToken);

    return {
      statusCode: 200,
      expires_in: 3600,
      access_token: accessToken,
      refresh_token: refreshToken,
      user_data: userData,
      message: '회원가입 성공!',
    };
  }

  public async login(user: LoginUserDTO): Promise<any | { status: number }> {
    return this.validateUser(user.user_id, user.password).then(
      async (userData) => {
        if (!userData) {
          throw new UnauthorizedException('존재하지 않습니다.');
        }

        const accessToken = await this.jwtService.signAsync({
          user_id: userData.user_id,
        });
        const refreshToken = await this.jwtService.signAsync({
          user_id: userData.user_id,
        });

        return {
          expires_in: 3600,
          access_token: accessToken,
          refresh_token: refreshToken,
          user_id: userData.user_id,
          statusCode: 200,
          message: '로그인 성공!',
        };
      },
    );
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOne(user_id: string): Promise<User> {
    const user = await this.userRepository.findOne({ user_id: user_id || '' });
    console.log('AUTH ---');
    if (!user) throw new NotFoundException(`Not Fount User ID:${user_id}`);
    return user;
  }

  async delete(user_id: string) {
    await this.getOne(user_id);
    await this.userRepository.delete({ user_id });
  }

  async update(user_id: string, updateData: UpdateUserDTO) {
    const user = await this.getOne(user_id);
    await this.userRepository.update(
      { user_id: updateData.user_id },
      updateData,
    );
  }
}
