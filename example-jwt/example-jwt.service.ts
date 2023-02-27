import { Injectable } from '@nestjs/common';
import { CreateExampleJwtDto } from './dto/create-example-jwt.dto';

@Injectable()
export class ExampleJwtService {
  create(createExampleJwtDto: CreateExampleJwtDto) {
    return 'This action adds a new exampleJwt';
  }

  findAll() {
    return `This action returns all exampleJwt`;
  }

}
