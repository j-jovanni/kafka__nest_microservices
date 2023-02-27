import { Test, TestingModule } from '@nestjs/testing';
import { ExampleJwtService } from './example-jwt.service';

describe('ExampleJwtService', () => {
  let service: ExampleJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleJwtService],
    }).compile();

    service = module.get<ExampleJwtService>(ExampleJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
