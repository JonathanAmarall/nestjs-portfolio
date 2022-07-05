import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({
    message: 'title é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'title' })
  title: string;

  slug: string;

  @IsNotEmpty({
    message: 'text é obrigatório.',
  })
  @ApiProperty({ type: String, description: 'text' })
  text: string;

  /**
   *
   */
  generateSlug() {
    this.slug = this.title.replace(/ /g, '-').toLocaleLowerCase();
  }
}
