import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@/src/user/dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    return await this.UserService.createUser(createUserDto);
  }
}
