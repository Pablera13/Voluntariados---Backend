/* eslint-disable prettier/prettier */
export class CreateRatingDto {
    Id: number;
    description: string;
    stars: number;
    date: Date;
    volunteeringId: number;
    volunteerId: number;
}
