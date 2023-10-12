import { Module } from '@nestjs/common';
import { CRMModule } from './crm.module';
@Module({
  imports: [CRMModule],
})
export class AppModule {}
