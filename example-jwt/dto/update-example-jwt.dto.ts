import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleJwtDto } from './create-example-jwt.dto';

export class UpdateExampleJwtDto extends PartialType(CreateExampleJwtDto) {}
