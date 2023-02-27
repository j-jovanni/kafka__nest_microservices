import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleRpcDto } from './create-example-rpc.dto';

export class UpdateExampleRpcDto extends PartialType(CreateExampleRpcDto) {
  id: number;
}
