import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class AdminLoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
