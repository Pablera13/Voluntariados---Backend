import { IsInt, IsNotEmpty } from "class-validator";

export class CreateEventVolunteerDto {

    @IsNotEmpty()
    @IsInt()
    volunteerId: number;

    @IsNotEmpty()
    @IsInt()
    eventId: number;
}
