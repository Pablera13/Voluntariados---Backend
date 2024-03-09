import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './Company.service';
import { CreateCompanyDto } from './dto/create-Company.dto';
import { UpdateCompanyDto } from './dto/update-Company.dto';

@Controller('Company')
export class CompanyController {
  constructor(private readonly CompanyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.CompanyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.CompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.CompanyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CompanyService.remove(+id);
  }
}
