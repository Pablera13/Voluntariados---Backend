import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const MyValidationPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })
  app.useGlobalPipes(MyValidationPipe);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
  });

  await app.listen(3000);

}
bootstrap();
