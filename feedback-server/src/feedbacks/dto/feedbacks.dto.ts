import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @MinLength(10)
  feedback: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
