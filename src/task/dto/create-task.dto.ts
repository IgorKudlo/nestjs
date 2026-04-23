import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority must be an integer' })
  @IsPositive({ message: 'Priority must be a positive number' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Tags must be an array' })
  @IsEnum(TaskTag, { each: true, message: 'Tag must be a valid tag' })
  @IsOptional()
  tags: TaskTag[];
}
