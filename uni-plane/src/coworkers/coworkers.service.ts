import { Injectable } from '@nestjs/common';
import { CreateCoworkerDto } from './dto/create-coworker.dto';
import { UpdateCoworkerDto } from './dto/update-coworker.dto';

@Injectable()
export class CoworkersService {
  create(createCoworkerDto: CreateCoworkerDto) {
    return 'This action adds a new coworker';
  }

  findAll() {
    return `This action returns all coworkers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coworker`;
  }

  update(id: number, updateCoworkerDto: UpdateCoworkerDto) {
    return `This action updates a #${id} coworker`;
  }

  remove(id: number) {
    return `This action removes a #${id} coworker`;
  }
}
