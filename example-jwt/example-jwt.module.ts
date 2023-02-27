import { Module } from '@nestjs/common';
import { ExampleJwtService } from './example-jwt.service';
import { ExampleJwtController } from './example-jwt.controller';

@Module({
  controllers: [ExampleJwtController],
  providers: [ExampleJwtService]
})
export class ExampleJwtModule {}
