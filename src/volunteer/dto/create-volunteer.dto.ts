import { IsInt, IsString, IsBoolean, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateVolunteerDto {

    @IsNotEmpty()
    @IsInt()
    cedula: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName1: string;

    @IsNotEmpty()
    @IsString()
    lastName2: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsBoolean()
    itsVerified: boolean;

    @IsNotEmpty()
    @IsInt()
    userId: number;
}
