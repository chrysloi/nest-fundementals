import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `Get all coffees by favours. Limit: ${limit}, offset: ${offset}`;
    return this.coffeesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `found one coffee #${id}`;
    return this.coffeesServices.findOne(id);
  }

  @Post()
  create(@Body() body) {
    // return body;
    return this.coffeesServices.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `Object with this #${id} is update with ${body}`;
    return this.coffeesServices.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    this.coffeesServices.remove(id);
  }
}
