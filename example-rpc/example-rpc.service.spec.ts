import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRpcService } from './example-rpc.service';

describe('ExampleRpcService', () => {
  let service: ExampleRpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleRpcService],
    }).compile();

    service = module.get<ExampleRpcService>(ExampleRpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
