import { IsNumber } from 'class-validator';

export class RatingDto {
  @IsNumber()
  critics: number;

  @IsNumber()
  readers: number;
}
