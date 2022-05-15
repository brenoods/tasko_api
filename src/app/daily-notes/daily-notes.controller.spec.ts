import { Test, TestingModule } from '@nestjs/testing';
import { DailyNotesController } from './daily-notes.controller';
import { DailyNotesService } from './daily-notes.service';

describe('DailyNotesController', () => {
  let controller: DailyNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyNotesController],
      providers: [DailyNotesService],
    }).compile();

    controller = module.get<DailyNotesController>(DailyNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
