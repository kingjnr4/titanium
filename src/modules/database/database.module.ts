import { Global, Module } from '@nestjs/common';
import { OrmService } from './services/orm.service';

@Global()
@Module({
  providers: [OrmService],
  exports:[OrmService]
})
export class DatabaseModule {}
