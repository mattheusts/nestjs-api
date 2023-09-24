import { Controller, Get, Param, Query } from '@nestjs/common';

type UserParams = { id: string };

@Controller('users')
export class UserController {
  @Get('/:id')
  findById(@Param() params: UserParams) {
    return `This action returns a #${params.id} user`;
  }

  findByPages(@Query() queries: any) {
    return `This action returns a page #${queries.page} user`;
  }
}
