import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRpcClientController } from './example-rpc-client.controller';
import { ExampleRpcClientService } from './example-rpc-client.service';

describe('ExampleRpcClientController', () => {
  let controller: ExampleRpcClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleRpcClientController],
      providers: [ExampleRpcClientService],
    }).compile();

    controller = module.get<ExampleRpcClientController>(ExampleRpcClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
