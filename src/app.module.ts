import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'volunteeringDB',
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: false, //cuando se vaya a correr el API por primera vez ponerlo en TRUE
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}