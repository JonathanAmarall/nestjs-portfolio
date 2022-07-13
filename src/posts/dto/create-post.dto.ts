import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({
    message: 'title é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'title' })
  title: string;

  @Exclude()
  slug: string;

  @IsNotEmpty({
    message: 'text é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'text' })
  text: string;
}
