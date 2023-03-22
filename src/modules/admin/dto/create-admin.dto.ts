import { IsNotEmpty, IsString ,MinLength, MaxLength} from "class-validator"

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  password: string;
}