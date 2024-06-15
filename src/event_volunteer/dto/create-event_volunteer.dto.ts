import { IsInt, IsNotEmpty } from "class-validator";

export class CreateEventVolunteerDto {

    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsInt()
    eventId: number;
}
