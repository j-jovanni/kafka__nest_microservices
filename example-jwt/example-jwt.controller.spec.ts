import { Test, TestingModule } from '@nestjs/testing';
import { ExampleJwtController } from './example-jwt.controller';
import { ExampleJwtService } from './example-jwt.service';

describe('ExampleJwtController', () => {
  let controller: ExampleJwtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleJwtController],
      providers: [ExampleJwtService],
    }).compile();

    controller = module.get<ExampleJwtController>(ExampleJwtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
