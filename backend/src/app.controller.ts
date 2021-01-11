import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return "Doraemon Plate Backend v.0.0.1";
  }
}  
