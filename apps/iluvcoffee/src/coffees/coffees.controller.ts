import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Injectable,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Public } from '../common/decorators/public.decorators';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
@Controller('coffees')
@Injectable()
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(CreateCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
