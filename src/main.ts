import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OrmService } from './modules/database/services/orm.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const ormService = app.get(OrmService)
  ormService.enableShutDownHooks(app)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
