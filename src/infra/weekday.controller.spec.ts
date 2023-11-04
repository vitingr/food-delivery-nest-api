import { Test, TestingModule } from '@nestjs/testing';
import { WeekdayController } from '../lib/weekday.controller';

describe('WeekdayController', () => {
  let controller: WeekdayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeekdayController],
    }).compile();

    controller = module.get<WeekdayController>(WeekdayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
