import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty({
    message: 'title é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'title' })
  title: string;

  @IsNotEmpty({
    message: 'description é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'description' })
  description: string;

  @IsNotEmpty({
    message: 'cover é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'cover' })
  cover: string;
}
