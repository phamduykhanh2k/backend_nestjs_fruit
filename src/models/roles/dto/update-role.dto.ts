import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNotEmpty({ message: 'ID của người dùng không được bỏ trống' })
  @IsMongoId({ message: 'ID của người dùng phải là kiểu MongoId' })
  _id: string;
}
