import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { ExampleRpcService } from './example-rpc.service';
import { CreateExampleRpcDto } from './dto/create-example-rpc.dto';
import { UpdateExampleRpcDto } from './dto/update-example-rpc.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Hero, HeroById } from './proto/hero';

@Controller()
export class ExampleRpcController {
  
  constructor(private readonly exampleRpcService: ExampleRpcService) {}

  @GrpcMethod('HeroesService', 'FindOne')
  async findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Hero>{
    return await this.exampleRpcService.findOne(data);
  }


}
