import { MessagingModule } from './infra/messaging/messaging.module';
import { DataBaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule,
    DataBaseModule,
    MessagingModule
  ]
})
export class AppModule {}
