import { getDuration } from './RepoCard';

describe('Testando o retorno da função getDuration', () => {
  test('Retorna o objeto com dias corretos', () => {
    const teste = getDuration(86400000);
    expect(teste).toStrictEqual({ days: 1 });
  });

  test('Retorna o objeto com horas corretas', () => {
    const teste = getDuration(3600000);
    expect(teste).toStrictEqual({ hours: 1 });
  });

  test('Retorna o objeto com minutos corretos', () => {
    const teste = getDuration(60000);
    expect(teste).toStrictEqual({ minutes: 1 });
  });
});
