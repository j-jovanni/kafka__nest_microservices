import { Module } from '@nestjs/common';
import { ClientsModule, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NAME_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          consumer: {
            groupId: 'kafka-consumers'
          },
          client: {
            clientId: "APP_CLIENT",
            brokers: [`${process.env.BROKER_KAFKA || 'localhost'}:9093`],
          }

        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
