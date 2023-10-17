import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';

describe('AppController', () => {
  let appController: RestaurantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [],
    }).compile();

    appController = app.get<RestaurantController>(RestaurantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController).toBe('Hello World!');
    });
  });
});
