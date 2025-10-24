import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoworkersService } from './coworkers.service';
import { CreateCoworkerDto } from './dto/create-coworker.dto';
import { UpdateCoworkerDto } from './dto/update-coworker.dto';

@Controller('coworkers')
export class CoworkersController {
  constructor(private readonly coworkersService: CoworkersService) {}

  @Post()
  create(@Body() createCoworkerDto: CreateCoworkerDto) {
    return this.coworkersService.create(createCoworkerDto);
  }

  @Get()
  findAll() {
    return this.coworkersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coworkersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoworkerDto: UpdateCoworkerDto) {
    return this.coworkersService.update(+id, updateCoworkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coworkersService.remove(+id);
  }
}
