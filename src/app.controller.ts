import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('NAME_MICROSERVICE') private readonly kakfa: ClientProxy

  ) { }

  @MessagePattern('hola_bebe')
  public messageCreate(@Payload() payload) {
    Logger.log("algien me manda mensaje",payload);
  }

  @Post("/send-message")
  public send_message(@Body("message") message) {
    console.log("emito");
    return firstValueFrom(
      this.kakfa.emit("hola_bebe", { message: message })

    )
  }

}
