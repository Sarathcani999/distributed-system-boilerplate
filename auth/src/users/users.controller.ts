import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('health')
  getHealth(): string {
    return "OK";
  }

  @Get('current-user')
  getCurrentUser(): string {
    return "Current user";
  }

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    const user = await this.usersService.register(userData);
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  @Post('login')
  login(): string {
    return "Login";
  }
} 