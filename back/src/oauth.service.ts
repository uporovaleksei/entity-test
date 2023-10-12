import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OAuthService {
  async getToken(
    clientId: string,
  ): Promise<{ access_token: string; base_domain: string }> {
    const response = await axios.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      {
        headers: {
          'X-Client-Id': clientId,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  }
}
