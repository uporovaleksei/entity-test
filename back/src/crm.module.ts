import { Module } from '@nestjs/common';
import { OAuthService } from './oauth.service';
import { CRMController } from './crm.controller';

@Module({
  providers: [OAuthService],
  controllers: [CRMController],
})
export class CRMModule {}
