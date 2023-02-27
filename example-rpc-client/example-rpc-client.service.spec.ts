import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRpcClientService } from './example-rpc-client.service';

describe('ExampleRpcClientService', () => {
  let service: ExampleRpcClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleRpcClientService],
    }).compile();

    service = module.get<ExampleRpcClientService>(ExampleRpcClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
