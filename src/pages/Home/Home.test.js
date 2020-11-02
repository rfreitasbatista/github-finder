import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '.';
import Provider from '../../contexts/Provider';
import renderWithRouter from '../../services/renderWithRouter';
import githubUser from '../../_mocks/github-user.json';

afterEach(() => jest.clearAllMocks());

describe('A página inicializa de forma correta', () => {
  test('O logo e o título estão na página', () => {
    renderWithRouter(
      <Provider>
        <Home />
      </Provider>,
    );

    const logo = screen.getByRole('img');
    const tituloGithub = screen.getAllByText(/Github/)[0];
    const tituloFinder = screen.getByText(/Finder/);

    expect(logo).toBeInTheDocument();
    expect(logo.src).toBe('http://localhost/github-icon-white.jpg');
    expect(tituloGithub).toBeInTheDocument();
    expect(tituloFinder).toBeInTheDocument();
  });

  test('A instrução principal se encontra na página', () => {
    renderWithRouter(<Home />);
    const instructionText = screen.getByText(/Insert a Github's user name/);

    expect(instructionText).toBeInTheDocument();
  });

  test('O campo de input se encontra na página, com o tipo correto', () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
    expect(inputField.type).toBe('text');
  });

  test('O botão de envio se encontra na página e possui o texto Search', () => {
    renderWithRouter(<Home />);

    const sendBtn = screen.getAllByRole('button')[0];
    expect(sendBtn).toBeInTheDocument();
    expect(sendBtn.innerHTML).toContain('Search');
  });
});

describe('O campo aceita somente usernames válidos', () => {
  test('não aceita caracteres especiais', () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    userEvent.type(inputField, '~.$#');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('não aceita espaços', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, ' ');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('não aceita espaços entre caracteres', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r r');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('não aceita dois hífens seguidos', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r--r');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('não aceita hífen como início', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, '-r');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('não aceita hífen como fim', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r-');

    const invalidWarning = screen.getByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });

  test('aceita hífen entre caracteres alfanuméricos', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r-r');

    const invalidWarning = screen.queryByText(/Please, insert a valid username/);
    expect(invalidWarning).not.toBeInTheDocument();
  });

  test('aceita caracteres alfanuméricos', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r1f2r3e');

    const invalidWarning = screen.queryByText(/Please, insert a valid username/);
    expect(invalidWarning).not.toBeInTheDocument();
  });

  test('aceita caracteres alfanuméricos com caixa alta', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');

    await userEvent.type(inputField, 'r1F2R3e');

    const invalidWarning = screen.queryByText(/Please, insert a valid username/);
    expect(invalidWarning).not.toBeInTheDocument();
  });

  test('não aceita aceita mais que 39 caracteres', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');
    const username = 'a'.repeat(40);

    await userEvent.type(inputField, username);

    const invalidWarning = screen.queryByText(/Please, insert a valid username/);
    expect(invalidWarning).toBeInTheDocument();
  });
});

describe('Insere o nome da pessoa usuária e renderiza os dados da pessoa', () => {
  test('Ao receber um username válido, realiza o fetch e traz a mensagem de quantos repositórios encontrou', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'rfreitasbatista');
    await userEvent.click(searchBtn);

    const successMsg = await screen.findByTestId('found-information');

    expect(successMsg).toBeInTheDocument();
  });

  test('Ao receber um username inválido, não realiza nenhuma busca', async () => {
    renderWithRouter(<Home />);

    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'r r r r');
    await userEvent.click(searchBtn);

    const successMsg = screen.queryByTestId('found-information');

    expect(successMsg).not.toBeInTheDocument();
  });

  test('Ao receber um username sem repositórios, retorna a mensagem de sucesso dizendo que foram encontrados 0 repositórios', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve([]),
      ok: true,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

    renderWithRouter(<Home />);
    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'usuarioSemRepositarios');
    await userEvent.click(searchBtn);

    const successMsg = await screen.findByText(/Found/);
    const zeroCheck = await screen.findByText(/0/);

    expect(successMsg).toBeInTheDocument();
    expect(zeroCheck).toBeInTheDocument();
  });

  test('Ao procurar por um usuário válido, porém inexistente, surge um aviso dizendo não ser possivel encontrá-lo', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(),
      ok: false,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

    renderWithRouter(<Home />);
    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'usuarioInexistente');
    await userEvent.click(searchBtn);

    const firstMessageCheck = await screen.findByText(/No results were found for/);
    const secondMessageCheck = await screen.findByText(/Please, try again with another username/);

    expect(firstMessageCheck).toBeInTheDocument();
    expect(secondMessageCheck).toBeInTheDocument();
  });

  test('Ao procurar por um usuário válido retorna os nomes dos repositórios', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(githubUser),
      ok: true,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

    renderWithRouter(<Home />);
    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'usuarioInexistente');
    await userEvent.click(searchBtn);

    const successMsg = await screen.findByText(/Found/);
    expect(successMsg).toBeInTheDocument();

    githubUser.forEach((repo) => expect(screen.queryByText(repo.name)).toBeInTheDocument());
  });

  test('Renderiza as informações de um repositório corretamente', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(githubUser),
      ok: true,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

    renderWithRouter(<Home />);
    const inputField = screen.getByRole('textbox');
    const searchBtn = screen.getAllByRole('button')[0];

    await userEvent.type(inputField, 'usuarioInexistente');
    await userEvent.click(searchBtn);

    const successMsg = await screen.findByText(/Found/);
    expect(successMsg).toBeInTheDocument();

    const title = screen.getByTestId('repo-title-0');
    const language = screen.getByTestId('repo-language-0');
    const description = screen.getByTestId('description-text-0');
    const stars = screen.getByTestId('repo-stars-0');
    const lastUpdated = screen.getByTestId('repo-last-update-0');

    expect(title).toBeInTheDocument();
    expect(title.innerHTML).toContain('alura');
    expect(language).toBeInTheDocument();
    expect(language.innerHTML).toContain('JavaScript');
    expect(lastUpdated).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(description.innerHTML).toContain('No description provided');
    expect(stars).toBeInTheDocument();
    expect(stars.innerHTML[0]).toContain('0');
  });
});
