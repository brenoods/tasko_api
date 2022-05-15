import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDailyNotesDto } from './dto/create-daily-notes.dto';
import { UpdateDailyNotesDto } from './dto/update-daily-notes.dto';
import { DailyNotesEntity } from './entities/daily-notes.entity';

@Injectable()
export class DailyNotesService {
  constructor(
    @InjectRepository(DailyNotesEntity)
    private readonly dailyNotesRepository: Repository<DailyNotesEntity>) {
  }

  async create(createDailyNotesDto: CreateDailyNotesDto) {
    const dailyNotes = this.dailyNotesRepository.create(createDailyNotesDto);
    return await this.dailyNotesRepository.save(dailyNotes);
  }

  findAll() {
    return `This action returns all dailyNotes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} dailyNote`;
  }

  update(id: string, updateDailyNotesDto: UpdateDailyNotesDto) {
    return `This action updates a #${id} dailyNote`;
  }

  remove(id: string) {
    return `This action removes a #${id} dailyNote`;
  }
}
