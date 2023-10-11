// crm.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OAuthService } from './oauth.service';
import axios from 'axios';
import { log } from 'console';

@Controller('crm')
export class CRMController {
  constructor(private readonly oauthService: OAuthService) {}

  @Post('create-entity')
  async createEntity(@Body() entityData: any) {
    const clientId = '31334466';
    const { access_token, base_domain } = await this.oauthService.getToken(clientId);
		const {entityType} = entityData
    const response = await axios.post(`https://${base_domain}/api/v4/${entityType}`,entityData.data, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });
		let entityId;
		if (entityType === 'contacts') {
			entityId = response.data._embedded.contacts[0].id;
		} else if (entityType === 'leads') {
			entityId = response.data._embedded.leads[0].id;
		} else if (entityType === 'companies') {
			entityId = response.data._embedded.companies[0].id;
		} 	
		return { id: entityId };
  }
}
