import { Test, TestingModule } from '@nestjs/testing';
import { AvaliationController } from 'src/lib/avaliation.controller';

describe('AvaliationController', () => {
  let controller: AvaliationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliationController],
    }).compile();

    controller = module.get<AvaliationController>(AvaliationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
