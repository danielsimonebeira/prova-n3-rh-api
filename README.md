# prova-n3-rh-api

Projeto criado para a N3 da disciplina de Linguagem de Programação III [2021/2] da Faculdade Cesusc


## Configuração do banco mongodb cloud

- Criar arquivo .env na raiz/root do projeto.

- Inserir a variáveis no arquivo:

`MONGO_CONECTA_STRING=<caminho_mongo_cloud>`

`PORT=<numeto_porta>`

## Para instalar as dependêcias

`yarn install` / `npm install`


## Rodar o sistema no modo de produção

`yarn start` / `npm run start`


## Rodar o sistema no modo de desenvolvimento

`yarn dev` / `npm run dev`


## Rotas da aplicação/endpoints

### Pessoa
- POST: {{localhost}}/api/v1/treinamento/pessoa
- GET: {{localhost}}/api/v1/treinamento/pessoa
- GET BY NAME: {{localhost}}/api/v1/treinamento/pessoa/{{nome}}
- PUT: {{localhost}}
- DELETE: {{localhost}}/api/v1/treinamento/pessoa/{{idPessoa}}

### Evento
- POST: {{localhost}}/api/v1/treinamento/evento
- GET: {{localhost}}/api/v1/treinamento/evento
- GET BY ID: {{localhost}}/api/v1/treinamento/evento/{{idSala}}
- PUT: {{localhost}}
- DELETE: {{localhost}}/api/v1/treinamento/evento/{{idSala}}