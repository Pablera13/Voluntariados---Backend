import { IsString, IsDateString, IsNumber, IsBoolean, IsNotEmpty, IsInt } from 'class-validator';

export class CreateSponsorshipDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDateString()
    startdate: Date;

    @IsNotEmpty()
    @IsDateString()
    enddate: Date;

    @IsNotEmpty()
    @IsNumber()
    goal: number;

    @IsNotEmpty()
    @IsBoolean()
    state: boolean;

    @IsNotEmpty()
    @IsInt()
    organizationId: number;
}
