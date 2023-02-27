import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc, MessagePattern, Payload } from '@nestjs/microservices';
import { ExampleRpcClientService } from './example-rpc-client.service';
import { CreateExampleRpcClientDto } from './dto/create-example-rpc-client.dto';
import { UpdateExampleRpcClientDto } from './dto/update-example-rpc-client.dto';
import { Observable } from 'rxjs';

@Controller("client-rpc")
export class ExampleRpcClientController {

  constructor(private readonly client: ExampleRpcClientService) {}
  
  @Get()
  call(): Observable<any> {
    return this.client.getHero();
  }
}
