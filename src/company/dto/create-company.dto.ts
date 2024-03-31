import { IsInt, IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {

  @IsNotEmpty()
  @IsInt()
  cedula: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  bankaccount: string;

  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  userId: number;

}
