import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Binary } from 'typeorm';

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

  @ApiProperty({ type: String, format: 'binary', description: 'cover' })
  cover: string;
}
