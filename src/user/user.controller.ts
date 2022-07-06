import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  /**
   *
   */
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    if (body.password != body.confirmPassword)
      throw new BadRequestException(
        'password and confirmPassword not does match!',
      );

    await this.userService.create(body);
  }
}
