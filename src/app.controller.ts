import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('validateId/:id')
  async GetIdForValidate(@Param('id') id: string) {
    try {
      const response = await axios.get(`https://apis.gometa.org/cedulas/${id}`);
      // Devuelve solo los datos de la respuesta
      return response.data;
    } catch (error) {
      // Maneja los errores apropiadamente
      throw error;
    }
  }
}
