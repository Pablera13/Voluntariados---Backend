import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateRatingDto {

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    stars: number;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    // volunteering: number;

    // volunteer: number;
}
