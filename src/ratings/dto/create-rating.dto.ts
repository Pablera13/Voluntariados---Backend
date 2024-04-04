import { IsNotEmpty, IsNumber, IsString, IsDate, IsInt } from 'class-validator';

export class CreateRatingDto {

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    stars: number;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsInt()
    volunteeringId: number; 

    @IsNotEmpty()
    @IsInt()
    volunteerId: number; 

}
