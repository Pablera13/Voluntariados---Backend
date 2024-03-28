import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const options = new DocumentBuilder()
  .setTitle('SistemaDeVoluntariadoAPI')
  .setDescription('Documentación')
  .setVersion('1.0')
  .addTag('tag')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('GloryAPI', app, document); 
}
bootstrap();
