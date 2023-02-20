import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){
    Logger.log(`Running on: ${process.env.BROKER_KAFKA || 'localhost'}:9093`);
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
