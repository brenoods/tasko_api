import { Module } from '@nestjs/common';
import { DailyNotesService } from './daily-notes.service';
import { DailyNotesController } from './daily-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyNotesEntity } from './entities/daily-notes.entity';

@Module({

  imports: [TypeOrmModule.forFeature([DailyNotesEntity])],
  exports: [DailyNotesService],
  controllers: [DailyNotesController],
  providers: [DailyNotesService]
})
export class DailyNotesModule { }
