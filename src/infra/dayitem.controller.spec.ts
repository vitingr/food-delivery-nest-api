import { Test, TestingModule } from '@nestjs/testing';
import { DayitemController } from '../lib/dayitem.controller';

describe('DayitemController', () => {
  let controller: DayitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayitemController],
    }).compile();

    controller = module.get<DayitemController>(DayitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
