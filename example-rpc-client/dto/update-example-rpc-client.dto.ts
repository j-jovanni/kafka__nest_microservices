import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleRpcClientDto } from './create-example-rpc-client.dto';

export class UpdateExampleRpcClientDto extends PartialType(CreateExampleRpcClientDto) {
  id: number;
}
