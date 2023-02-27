import { Module } from '@nestjs/common';
import { ExampleRpcClientService } from './example-rpc-client.service';
import { ExampleRpcClientController } from './example-rpc-client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: './src/example-rpc/proto/hero.proto',
        },
      },
    ]),

  ],
  controllers: [ExampleRpcClientController],
  providers: [ExampleRpcClientService]
})
export class ExampleRpcClientModule { }
