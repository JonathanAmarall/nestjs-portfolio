import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller()
export class AuthController {
  /**
   *
   */
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() body: AuthUserDto) {
    return this.authService.login(body);
  }
}
