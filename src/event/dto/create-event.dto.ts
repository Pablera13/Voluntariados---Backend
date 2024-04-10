import { IsString, IsDateString, IsNumber, IsNotEmpty, IsOptional, MaxLength, Min, Max, IsInt } from 'class-validator';

export class CreateEventDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDateString()    
    date: Date;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    quota: number;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    contact: string; 

    @IsNotEmpty()
    @IsInt()
    organizationId: number;  
}
