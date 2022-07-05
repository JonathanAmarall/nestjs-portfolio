import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty({
    message: 'username é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'username' })
  username: string;

  @IsNotEmpty({
    message: 'password é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}
