import { PartialType } from '@nestjs/swagger';
import { CreateDailyNotesDto } from './create-daily-notes.dto';

export class UpdateDailyNotesDto extends PartialType(CreateDailyNotesDto) { }
