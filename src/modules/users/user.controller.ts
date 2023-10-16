import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

type UserParams = { id: string };

type UserQueries = { page: string; limit: string };

type BodyUser = {
  name: string;
  idade: number;
};

@Controller('users')
export class UserController {
  @Get('/:id')
  findById(@Param() params: UserParams) {
    return `This action returns a #${params.id} user`;
  }

  @Get('/pages/findPages')
  findByPages(@Query() queries: UserQueries) {
    return `This action returns a page and limit #${queries.page}, ${queries.limit} user`;
  }

  @Post('/create')
  create(@Body() data: BodyUser) {
    return `This action adds a new user ${data.name} ${data.idade}`;
  }
}
