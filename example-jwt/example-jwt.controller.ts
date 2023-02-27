import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExampleJwtService } from './example-jwt.service';
import { CreateExampleJwtDto } from './dto/create-example-jwt.dto';
import { UpdateExampleJwtDto } from './dto/update-example-jwt.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('example-jwt')
export class ExampleJwtController {
  constructor(private readonly exampleJwtService: ExampleJwtService) {}

  @UseGuards(AuthGuard('jwt'))  
  //implements secure for role
  findAll() {
    return this.exampleJwtService.findAll();
  }
}
