import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  Delete,
  Query,
  Inject,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesServices: CoffeesService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesServices.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesServices.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesServices.create(createCoffeeDto);
  }

  @Patch('recommend/:id')
  async recommend(@Param('id') id: number) {
    const coffee = await this.coffeesServices.findOne(id);
    return this.coffeesServices.recommendCoffee(coffee);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesServices.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.coffeesServices.remove(id);
  }
}
