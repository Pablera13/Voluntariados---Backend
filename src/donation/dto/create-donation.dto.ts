import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDonationDto {

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsInt()
    sponsorshipId: number;

    @IsNotEmpty()
    @IsInt()
    volunteerId: number;

}
