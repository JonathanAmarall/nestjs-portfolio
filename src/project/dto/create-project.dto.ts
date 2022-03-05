import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty({
    message: 'title é obrigatório.',
  })
  title: string;

  @IsNotEmpty({
    message: 'description é obrigatório.',
  })
  description: string;

  @IsNotEmpty({
    message: 'cover é obrigatório.',
  })
  cover: string;
}
