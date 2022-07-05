import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  /**
   *
   */
  constructor(private jwtService: JwtService) {}
  async login(user: AuthUserDto) {
    const userExistent = this.users.find(
      (x) => x.username == user.username && x.password == user.password,
    );
    if (!userExistent) throw new NotFoundException();

    const payload = {
      username: userExistent.username,
      userExistent: userExistent.userId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
