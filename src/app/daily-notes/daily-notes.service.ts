import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(userId: string) {
    return await this.dailyNotesRepository.find({
      select: ['id', 'date', 'notes'],
      where: [{ userId: userId }]
    });
  }

  async findOne(id: string) {
    return await this.findOneOrFailById(id);
  }

  async update(id: string, updateDailyNotesDto: UpdateDailyNotesDto) {
    const dailyNote = await this.findOneOrFailById(id)
    this.dailyNotesRepository.merge(dailyNote, updateDailyNotesDto);
    return await this.dailyNotesRepository.save(dailyNote);
  }

  async remove(id: string) {
    await this.findOneOrFailById(id);
    this.dailyNotesRepository.softDelete({ id });
  }

  async findOneOrFailById(id: string) {
    try {
      return await this.dailyNotesRepository.findOneOrFail({
        select: ['id', 'date', 'notes'],
        where: [{ id: id }]
      });
    }
    catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
