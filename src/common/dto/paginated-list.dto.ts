import { IsOptional } from 'class-validator';

export class PaginatedListDto<T> {
  totalCount: number;
  data: T[];
}
