import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // only apply for intections directs with users
  // app.use(cookieParser());
  // app.use({ cookie: { sameSite: true } });
  
  //conect to service brocker kakfa
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      consumer: {
        groupId: 'kafka-consumers'//change value
      },
      client: {
        clientId: "APP_CLIENT",//change value
        brokers: [`${process.env.KAFKA_BROKER}:${process.env.KAFKA_PORT}`],

      }
    }
  } as MicroserviceOptions)


  //conect to service brocker rpc
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'example-rpc/proto/hero.proto'),
    },
  } as MicroserviceOptions)

  await app.startAllMicroservices()
  await app.listen(3000);

}
bootstrap();
