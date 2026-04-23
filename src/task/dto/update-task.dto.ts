import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  @Length(2, 40, { message: 'Title must be between 2 and 40 characters' })
  title: string;

  @IsBoolean({ message: 'Status must be a boolean' })
  isCompleted: boolean;
}
