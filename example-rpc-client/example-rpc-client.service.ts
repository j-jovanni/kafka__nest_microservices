import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateExampleRpcClientDto } from './dto/create-example-rpc-client.dto';
import { UpdateExampleRpcClientDto } from './dto/update-example-rpc-client.dto';
import { HeroesService } from './proto/hero-service';

@Injectable()
export class ExampleRpcClientService implements OnModuleInit {
  private heroesService: HeroesService;

  constructor(@Inject('HERO_SERVICE') private client: ClientGrpc) { }

  onModuleInit() {
    try {
      this.heroesService = this.client.getService<HeroesService>('HeroesService');
    } catch (error) {
      console.log(error);
      
    }
  }

  getHero(): Observable<string> {
    return this.heroesService.findOne({ id: 1 });
  }
}
