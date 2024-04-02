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
  @IsInt()
  bankaccount: number;

  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  // @IsNotEmpty()
  // @IsInt()
  // userId: number;


}
