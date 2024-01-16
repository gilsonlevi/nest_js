import { Test, TestingModule } from '@nestjs/testing';
import { FamousPhrasesController } from './famous-phrases.controller';

describe('FamousPhrasesController', () => {
  let controller: FamousPhrasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamousPhrasesController],
    }).compile();

    controller = module.get<FamousPhrasesController>(FamousPhrasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
