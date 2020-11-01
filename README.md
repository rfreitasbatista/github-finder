# Github Finder

Projeto criado para atestar capacidade técnica. O objetivo é buscar repositórios de usuários do Github e exibir suas informações em uma aplicação responsiva.

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
   |  |  └── emptyResults.scss
   |  ├── Footer
   |  |  ├── footer.scss
   |  |  └── Footers.js
   |  ├── Header
   |  |  ├── Header.js
   |  |  └── header.scss
   |  ├── Repository
   |  |  ├── RepoCard.js
   |  |  └── repoCard.scss
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
   |     ├── home.scss
   |     ├── Home.test.js
   |     └── index.js
   ├── services
   |  └── githubAPI.js
   ├── setupTests.js
   └── _mocks
```

## Instruções de uso

Para editar ou visualizar o projeto em funcionamento, clone o repositório através do comando:

```

```



### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
