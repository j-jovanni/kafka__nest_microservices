import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
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
  } as MicroserviceOptions)
  app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();


// # Required connection configs for Kafka producer, consumer, and admin
// bootstrap.servers=pkc-n00kk.us-east-1.aws.confluent.cloud:9092
// security.protocol=SASL_SSL
// sasl.mechanisms=PLAIN
// sasl.username=V27HX2JSQPRNGKAL
// sasl.password=467UGbto45pnGxHtQOpyWNELKVzH0SXXMFe9/sX1HF5N8Z+3n02guHoQwik9pC+R

// # Best practice for higher availability in librdkafka clients prior to 1.7
// session.timeout.ms=45000
