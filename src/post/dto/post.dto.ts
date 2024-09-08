import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: 'The title of the post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The description of the post' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'The author of the post' })
  @IsString()
  author: string;

  @ApiProperty({ description: 'The total views of the post' })
  @IsNumber()
  views: number;

  @ApiProperty({ description: 'The total likes of the post' })
  @IsNumber()
  likes: number;
}
