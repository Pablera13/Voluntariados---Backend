import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
