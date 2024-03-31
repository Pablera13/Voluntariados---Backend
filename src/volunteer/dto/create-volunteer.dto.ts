import { IsInt, IsString, IsDate, IsBoolean, IsNotEmpty } from 'class-validator';

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
    @IsDate()
    birthday: Date;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsBoolean()
    itsVerified: boolean;

    // user: number;
}
