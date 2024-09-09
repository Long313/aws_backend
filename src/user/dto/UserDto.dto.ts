import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The age of the user' })
  @IsInt()
  age: number;

  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  email: string;
}
