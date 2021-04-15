import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'Doraemon Plate Backend v.0.0.1';
  }

  @Get('/splash')
  splash() {
    return this.appService.splash();
  }
}
