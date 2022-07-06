import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty({
    message: 'username é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'username' })
  username: string;

  @IsNotEmpty({
    message: 'email é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'email' })
  @IsEmail()
  email: string;

  @IsPhoneNumber('PT')
  phone: string;
}
