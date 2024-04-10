import { IsInt, IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateVolunteeringDto {
 
    @IsNotEmpty()
    @IsString()
    projectName: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @IsNotEmpty()
    @IsDateString()
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
    requirements: string;

    @IsNotEmpty()
    @IsString()
    contact: string;

    @IsNotEmpty()
    @IsInt()
    organizationId: number;
}
