import {
  Controller,
  Post,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@/src/user/dto/createUser.dto';
import { IUserResponse } from '@/src/user/types/userRespose.interface';
import { LoginDto } from '@/src/user/dto/loginUser.dto';
import type { AuthRequest } from '@/src/types/expressRequest.interface';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async loginUser(
    @Body('user') loginUserDto: LoginDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);

    return this.userService.generateUserResponse(user);
  }

  @Get('user')
  async getCurrentUser(@Req() request: AuthRequest): Promise<IUserResponse> {
    console.log(request.user);
    return this.userService.generateUserResponse(request.user);
  }
}
