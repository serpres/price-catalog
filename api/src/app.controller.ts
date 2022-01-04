import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
  @Get()
  getTest(): string {
    return 'Test 1';
  }
}
