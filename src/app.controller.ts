import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test-api')
  @ApiResponse({ status: 200 })
  getHello(): string {
    return this.appService.getHello();
  }
}
