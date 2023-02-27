import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { RateLimiterGuard, RateLimiterModule } from 'nestjs-rate-limiter';
import { APP_GUARD } from '@nestjs/core';
import { ClientsModule, MicroserviceOptions, Transport } from '@nestjs/microservices';


@Module({
 
  imports: [
    //protection RateLimiter ddos and bots
    RateLimiterModule, 
    //configuration client for kafka
    ClientsModule.register([
      {
        name: 'NAME_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          consumer: {
            //group of consumer microservice
            groupId: 'kafka-consumers'
          },
          client: {
            clientId: "APP_CLIENT",
            //broker(server) thath hosts the client of kafka
            brokers: [`${process.env.KAFKA_BROKER}:${process.env.KAFKA_PORT}`],
          }

        }
      }
    ]),
    // ClientsModule.register([
    //   {
    //     name: AUTH_SERVICE_NAME,
    //     transport: Transport.GRPC,
    //     options: {
    //       url: '0.0.0.0:50051',
    //       package: AUTH_PACKAGE_NAME,
    //       protoPath: 'node_modules/grpc-nest-proto/proto/auth.proto',
    //     },
    //   },
    // ]),
  ],

  controllers: [ExampleController],
  providers: [
    ExampleService,
    //guard for module prevention ddos
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard,
    },
  ]
})
export class ExampleModule { }
