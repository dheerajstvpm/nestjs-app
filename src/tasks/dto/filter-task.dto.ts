import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class FilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: string;
  @IsOptional()
  @IsNotEmpty()
  search?: string;
}
