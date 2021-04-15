import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Splash } from './entities/splash.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Splash)
    private readonly splashRepository: Repository<Splash>,
  ) {}

  // App Splash Datas
  async splash(): Promise<any> {
    const user = await this.splashRepository.findOne();
    return user;
  }
}
