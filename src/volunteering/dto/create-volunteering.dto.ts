import { IsInt, IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateVolunteeringDto {
 
    @IsNotEmpty()
    @IsInt()
    cedula: number;

    @IsNotEmpty()
    @IsString()
    projectName: string;

    @IsNotEmpty()
    @IsDate()
    startDate: Date;

    @IsNotEmpty()
    @IsDate()
    finishDate: Date;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsInt()
    quotas: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    contact: string;

    // company: number; 
}
