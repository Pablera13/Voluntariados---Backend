import { IsNotEmpty, IsNumber, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateRatingDto {

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    stars: number;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsInt()
    volunteeringId: number; 

    @IsNotEmpty()
    @IsInt()
    volunteerId: number; 

}
