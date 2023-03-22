import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'configs';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AdminModule,
    AuthModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    JwtModule.register({
    }),
  ],
})
export class AppModule {}
