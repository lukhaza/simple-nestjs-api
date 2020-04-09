import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RandomorgService } from './services/randomorg/randomorg.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private randomService: RandomorgService,
  ) { }

  @Get('hello')
  getHello(): { name: string } {
    return this.appService.getHello();
  }

  @Get('random')
  getRandom(): number {
    return this.randomService.getdummy();
  }

  @Get('getintegers')
  getints(): {} {
    return this.randomService.generateIntegers();
  }
}