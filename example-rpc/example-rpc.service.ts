import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { CreateExampleRpcDto } from './dto/create-example-rpc.dto';
import { UpdateExampleRpcDto } from './dto/update-example-rpc.dto';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class ExampleRpcService {
  constructor(private readonly http: HttpService) {}
  
  async findOne(data: any) {
    await this.http.get('https://api.github.com/users/januwA').toPromise();
    await this.http.get('https://api.github.com/users/januwA').toPromise();
    await this.http.get('https://api.github.com/users/januwA').toPromise();
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }

}
