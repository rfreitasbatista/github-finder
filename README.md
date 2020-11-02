# Github Finder

Projeto criado para atestar capacidade técnica. O objetivo é buscar repositórios de usuários do Github e exibir suas informações em uma aplicação responsiva.

## Instruções de uso

### `Instalação`

Para editar ou visualizar o projeto em funcionamento, entre em seu terminal e clone o repositório através do comando:

```
git clone git@github.com:rfreitasbatista/github-finder.git
```

Navegue até o repositório da aplicação e rode o comando para instalar as dependências:

```
cd github-finder
npm install
```

Após finalizada a instalação sem erros, rode a aplicação localmente com o comando:

```
npm start
```

### `Utilização`

A aplicação faz uma busca à API do github com o nome de usuário informado no campo de texto. 

Caso o usuário seja válido, mesmo que não haja repositórios, a aplicação retornará as informações dele e de cada um de seus repositórios.

Caso o usuário não exista, a aplicação mostrará um aviso de que não foram encontrados resultados para essa busca e reiniará em poucos segundos.

Ao encontrar um usuário, a aplicação trará o número de repositórios que ele possui. Se houverem repositorios, ele trará os seguintes dados:

  - título do repositório
  - a linguagem mais utilizada no projeto
  - quantos dias desde a última atualização
  - a descrição do repositório feita pelo usuário
  - quantas estrelas este repositório recebeu
  - link para acessá-lo.

### `Testes`

Para rodar os testes da aplicação, entre no repositório do projeto e rode o seguinte comando:

```
  npm test
```

Os testes foram feitos simulando a ação do usuário dentro da aplicação. Deverá aparecer em seu terminal o que foi testado e qual parte da aplicação foi avaliada.


## Tecnologias utilizadas

Abaixo serão listada as tecnologias que foram utilizadas na aplicação, basta clicar no nome para acessar sua documentação.

  - [ReactJS](https://pt-br.reactjs.org)
  - [SASS](https://sass-lang.com/)
  - [React Router](https://reactrouter.com/web/guides/quick-start)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - [Jest](https://jestjs.io/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Github Developer API](https://developer.github.com/v3/)

## Arquitetura

 Foram utilizados princípios da arquitetura SOLID. As regras mais aplicáveis ao projeto eram `Principio da responsabilidade única` (S), `Princípio aberto/fechado` (O) e `Princípio da inversão da dependência`(D).

 Os componentes foram pensados para serem facilmente editados, modificados e reaproveitados.

 A estrutura de pastas foi organizada de forma que fossem agrupadas funcionalidades ou rotas. 

```
├── package-lock.json
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── logo192.png
|  ├── logo512.png
|  ├── manifest.json
|  └── robots.txt
├── README.md
└── src
   ├── App.js
   ├── App.scss
   ├── assets
   |  ├── gifs
   |  |  └── notFound.gif
   |  ├── github-colors.json
   |  └── images
   |     └── github-icon-white.jpg
   ├── components
   |  ├── EmptyResults
   |  |  ├── EmptyResults.js
   |  |  └── EmptyResults.scss
   |  ├── Footer
   |  |  ├── Footer.scss
   |  |  └── Footers.js
   |  ├── Header
   |  |  ├── Header.js
   |  |  └── Header.scss
   |  ├── Repository
   |  |  ├── RepoCard.js
   |  |  └── RepoCard.scss
   |  ├── SearchBar
   |  |  └── SearchBar.js
   |  ├── SearchButton.js
   |  └── TextInput.js
   ├── contexts
   |  ├── Provider.js
   |  └── UserContext.js
   ├── index.css
   ├── index.js
   ├── pages
   |  └── Home
   |     ├── Home.scss
   |     ├── Home.test.js
   |     └── index.js
   ├── services
   |  └── githubAPI.js
   ├── setupTests.js
   └── _mocks
      └── github-user.json
```
## Autor

Feito com ❤️ por Rodrigo Freitas Batista.

[![Linkedin Badge](https://img.shields.io/badge/-Rodrigo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rfreitasbatista//)](https://www.linkedin.com/in/rfreitasbatista/) 
[![Gmail Badge](https://img.shields.io/badge/-rfreitasbatista@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rfreitasbatista@gmail.com)](mailto:rfreitasbatista@gmail.com)
