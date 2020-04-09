import { Test, TestingModule } from '@nestjs/testing';
import { RandomorgService } from './randomorg.service';

describe('RandomorgService', () => {
  let service: RandomorgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomorgService],
    }).compile();

    service = module.get<RandomorgService>(RandomorgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
