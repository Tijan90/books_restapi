import { IsString, IsArray, IsOptional, IsInt, Min, Max, IsObject, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { RatingDto } from './Ratings.dto';

const currentYear = new Date().getFullYear()

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    genre?: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1000) 
    @Max(currentYear, { message: `published_year cannot be greater than the ${ currentYear }` }) 
    published_year: number;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    characters: string[];

    @IsOptional()
    @IsObject()
    @ValidateNested() 
    @Type(() => RatingDto)
    ratings?: RatingDto;
}
