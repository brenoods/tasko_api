import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { DailyNotesService } from './daily-notes.service';
import { CreateDailyNotesDto } from './dto/create-daily-notes.dto';
import { UpdateDailyNotesDto } from './dto/update-daily-notes.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('api/v1/daily-notes')
@ApiTags('daily-notes')
export class DailyNotesController {
  constructor(private readonly dailyNotesService: DailyNotesService) { }

  @Post()
  create(@Req() req: any, @Body() createDailyNoteDto: CreateDailyNotesDto) {
    createDailyNoteDto.userId = req.user.id;
    return this.dailyNotesService.create(createDailyNoteDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.dailyNotesService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyNotesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyNoteDto: UpdateDailyNotesDto) {
    return this.dailyNotesService.update(id, updateDailyNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyNotesService.remove(id);
  }
}
