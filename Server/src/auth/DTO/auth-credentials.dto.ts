import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsEmail()
  email:string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  fullname:string
  
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  status:string

  @IsString()
  @MinLength(1)
  // @MaxLength(20)
  imagelink:string


  
}