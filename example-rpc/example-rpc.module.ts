import { Module } from '@nestjs/common';
import { ExampleRpcService } from './example-rpc.service';
import { ExampleRpcController } from './example-rpc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[
    HttpModule
  ],
  controllers: [ExampleRpcController],
  providers: [ExampleRpcService]
})
export class ExampleRpcModule {}
