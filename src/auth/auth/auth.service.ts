import { UserService } from './../../user/user.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user: AuthUserDto) {
    const userExistent = await this.userService.findByUserName(user.username);

    if (!userExistent)
      throw new BadRequestException('User or password is invalid.');

    var result = await bcrypt.compare(user.password, userExistent.password);

    if (!result) throw new BadRequestException('User or password is invalid.');

    const payload = {
      username: userExistent.username,
      id: userExistent.id,
      email: userExistent.email,
      role: 'admin',
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
