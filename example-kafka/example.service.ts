import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Injectable()
export class ExampleService {
  constructor(
    @Inject('NAME_MICROSERVICE') private readonly kakfa: ClientProxy,

  ) { }

  create(createExampleDto: string) {
    return firstValueFrom(
      this.kakfa.emit("hola_bebe", { message: createExampleDto })
    )
  }

}
