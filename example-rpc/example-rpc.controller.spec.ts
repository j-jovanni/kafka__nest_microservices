import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRpcController } from './example-rpc.controller';
import { ExampleRpcService } from './example-rpc.service';

describe('ExampleRpcController', () => {
  let controller: ExampleRpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleRpcController],
      providers: [ExampleRpcService],
    }).compile();

    controller = module.get<ExampleRpcController>(ExampleRpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
