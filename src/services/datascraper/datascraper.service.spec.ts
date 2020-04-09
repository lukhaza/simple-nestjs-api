import { Test, TestingModule } from '@nestjs/testing';
import { DatascraperService } from './datascraper.service';

describe('DatascraperService', () => {
  let service: DatascraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatascraperService],
    }).compile();

    service = module.get<DatascraperService>(DatascraperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
