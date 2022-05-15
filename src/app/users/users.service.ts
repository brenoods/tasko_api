import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>) {
  }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email']
    });
  }

  async findOneOrFailById(id: string) {
    try {
      return await this.usersRepository.findOneOrFail({
        select: ['id', 'firstName', 'lastName', 'email'],
        where: [{ id: id }]
      });
    }
    catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneOrFailByEmail(email: string) {
    try {
      return await this.usersRepository.findOneOrFail({ where: [{ email: email }] });
    }
    catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateUserDto) {
    const user = this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findOneOrFailById(id)
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async destroy(id: string) {
    await this.findOneOrFailById(id);
    this.usersRepository.softDelete({ id });
  }
}
