import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){
    Logger.log(`Kafka run: ${process.env.KAFKA_BROKER}:${process.env.KAFKA_PORT}`);
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
