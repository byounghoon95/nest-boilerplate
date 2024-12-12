import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('nest boilerplate')
    .setDescription('nest boilerplate practice')
    .setVersion('1.0')
    .build();

  const docs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, docs);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
