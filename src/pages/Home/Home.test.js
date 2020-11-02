import { screen } from '@testing-library/react';
import Home from '.';
import Provider from '../../contexts/Provider';
import renderWithRouter from '../../services/renderWithRouter';
import githubUser from '../../_mocks/github-user.json';

describe('A página inicializa de forma correta', () => {
  test('A instrução principal se encontra na página', () => {
    renderWithRouter(
      <Provider>
        <Home />
      </Provider>,
    );
    const instructionText = screen.getByText(/Insert a Github's user name/);
    const inputField = screen.getByRole('textbox');

    expect(instructionText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  test('O campo de input se encontra na página, com o tipo correto', () => {
    renderWithRouter(
      <Provider>
        <Home />
      </Provider>,
    );

    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
    expect(inputField.type).toBe('text');
  });

  test('O botão de envio se encontra na página e é clicável', () => {
    
  })
});
