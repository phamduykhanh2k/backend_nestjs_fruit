import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ResponseMessage } from 'src/common/decorators/response.decorator';
import { IUser } from 'src/common/interfaces/user.interface';
import { User } from 'src/common/decorators/user.decorator';
import { ValidateObjectIdPipe } from 'src/common/pipes/validate_object_id.pipe';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @ResponseMessage('Tạo mới một quyền')
  @Post()
  async create(@Body() createPermissionDto: CreatePermissionDto, @User() user: IUser) {
    return await this.permissionsService.create(createPermissionDto, user);
  }

  @ResponseMessage('Lấy danh sách tất cả quyền')
  @Get()
  async findAll(@Query() queryString: string) {
    return await this.permissionsService.findAll(queryString);
  }

  @ResponseMessage('Lấy thông tin của quyền')
  @Get(':id')
  async findOne(@Param('id', ValidateObjectIdPipe) id: string) {
    return await this.permissionsService.findOne(id);
  }

  @ResponseMessage('Cập nhật một quyền')
  @Patch(':id')
  async update(
    @Param('id', ValidateObjectIdPipe) _id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
    @User() user: IUser,
  ) {
    return await this.permissionsService.update(updatePermissionDto, user);
  }

  @ResponseMessage('Xóa một quyền')
  @Delete(':id')
  async remove(@Param('id', ValidateObjectIdPipe) id: string, @User() user: IUser) {
    return await this.permissionsService.remove(id, user);
  }
}
