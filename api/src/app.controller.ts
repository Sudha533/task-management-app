import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('/name') 
  async addName(@Body('name') name:string) {
    return name;
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
