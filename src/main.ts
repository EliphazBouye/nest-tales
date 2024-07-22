import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule }  from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Global Pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  // Enable swagger
  const config = new DocumentBuilder()
  .setTitle("NestBlog")
  .setDescription("The NestBlog API Description")
  .setVersion('0.1')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
