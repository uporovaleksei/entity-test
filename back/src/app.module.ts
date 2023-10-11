import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CRMModule } from './crm.module';
@Module({
  imports: [CRMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
