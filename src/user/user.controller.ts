import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@/src/user/dto/createUser.dto';
import { IUserResponse } from '@/src/user/types/userRespose.interface';
import { LoginDto } from '@/src/user/dto/loginUser.dto';
import { User } from '@/src/user/decorators/user.decorator';
import { AuthGuard } from '@/src/user/guard/auth.guards';
import { UpdateUserDto } from '@/src/user/dto/updateUserDto';

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

  @Put('user')
  @UseGuards(AuthGuard)
  async updateUser(
    @User('id') userId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<IUserResponse> {
    const updateUser = await this.userService.updateUser(userId, updateUserDto);
    return this.userService.generateUserResponse(updateUser);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async getCurrentUser(@User() user): Promise<IUserResponse> {
    return this.userService.generateUserResponse(user);
  }
}
