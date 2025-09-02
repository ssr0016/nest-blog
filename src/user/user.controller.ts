import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@/src/user/dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    return await this.UserService.createUser(createUserDto);
  }
}
