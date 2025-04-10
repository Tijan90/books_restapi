import { IsString, IsArray, IsOptional, IsInt, Min, Max, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';  
import { RatingDto } from './Ratings.dto';  // Import RatingDto

const currentYear = new Date().getFullYear();  // Store the current year in a variable

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsInt()
  @Min(1000)
  @Max(currentYear, { message: `published_year cannot be greater than the ${ currentYear }` })
  published_year?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  characters?: string[];

  @IsOptional()
  @IsObject()
  @ValidateNested() 
  @Type(() => RatingDto) 
  ratings?: RatingDto; 
}
