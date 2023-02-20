import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly kakfa;
    constructor(appService: AppService, kakfa: ClientProxy);
    messageCreate(payload: any): void;
    send_message(message: any): Promise<any>;
}
