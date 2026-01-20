import { Injectable, UnauthorizedException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface ApiKey {
  id: string;
  nome: string;
  key: string;
  ativo: boolean;
}

@Injectable()
export class ApiKeyService {
  private apiKeys: ApiKey[] = [
    {
      id: '1',
      nome: 'PDV_PADRAO',
      key: 'CHAVE-DE-TESTE-123',
      ativo: true,
    },
  ];

  gerar(nome: string): ApiKey {
    const nova = {
      id: randomUUID(),
      nome,
      key: randomUUID(),
      ativo: true,
    };
    this.apiKeys.push(nova);
    return nova;
  }

  validar(apiKey: string): ApiKey {
    const encontrada = this.apiKeys.find(
      k => k.key === apiKey && k.ativo,
    );

    if (!encontrada) {
      throw new UnauthorizedException('API Key inválida');
    }

    return encontrada;
  }
}
