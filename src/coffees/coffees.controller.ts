import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll(paginationQuery);
    // return `This action returns all coffees Limit: ${limit}, Offset: ${offset}`;
  }

  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffees');
  //   } best practice to not do this

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id);
    //  return `this action returns #${id} coffee`;
  }

  //   @Get(':id')
  //   findOne(@Param() params) {
  //     return `this action returns #${params.id} coffee`;
  //   }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
    // return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coffeeService.remove(id);
    // return `This action removes #${id} coffee`;
  }
}
