import { Controller, Post, Body, Inject, Logger, UseInterceptors, InternalServerErrorException } from '@nestjs/common';
import { ExampleService } from './example.service';
import { RateLimit } from 'nestjs-rate-limiter'
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { SentryInterceptor } from 'src/sentry-interceptor/sentry.interceptor';

//apply interceptor errors sentry
//@UseInterceptors(SentryInterceptor)
@Controller('example')
export class ExampleController {
  constructor(
    @Inject('NAME_MICROSERVICE') private readonly kakfa: ClientProxy,
    private readonly exampleService: ExampleService

  ) { }
  @Post("/send-message")
  @RateLimit({ //limit requests for ip prevention ddos
    keyPrefix: 'sign-up',
    points: 5,
    duration: 60,
    errorMessage: 'Accounts cannot be created more than once in per minute'
  })
  public send_message(@Body("message") message) {
    return this.exampleService.create(message);
  }



  @MessagePattern('hola_bebe')
  public messageCreate(@Payload() payload) {
    Logger.log("algien me manda mensaje", payload);
  }


}
