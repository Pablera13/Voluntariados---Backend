import { IsString, IsDate, IsNumber, IsBoolean, IsNotEmpty, IsInt } from 'class-validator';

export class CreateSponsorshipDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    startdate: Date;

    @IsNotEmpty()
    @IsDate()
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
