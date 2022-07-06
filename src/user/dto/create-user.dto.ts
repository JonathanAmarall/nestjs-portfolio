import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'username é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'username' })
  username: string;

  @IsNotEmpty({
    message: 'email é obrigatório.',
  })
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;

  @IsNotEmpty({
    message: 'password é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'password' })
  password: string;

  @IsNotEmpty({
    message: 'confirmPassword é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'confirmPassword' })
  confirmPassword: string;

  @ApiProperty({ type: String, description: 'phone' })
  phone: string;
}
