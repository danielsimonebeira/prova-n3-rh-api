# prova-n3-rh-api

Projeto criado para a N3 da disciplina de Linguagem de Programação III [2021/2] da Faculdade Cesusc

A Faculdade Cesusc irá realizar uma capacitação para uma grande empresa de Florianópolis, especializada em gestão de recursos humanos. O treinamento será realizado em duas etapas e as pessoas serão divididas em salas com lotação variável. Serão realizados, também, dois intervalos de café em dois espaços distintos. A partir deste cenário, você foi contratado para desenvolver o back-end do sistema que gerenciará este evento.

## Requisitos da Entrega

- Realizar o cadastro de pessoas, com nome e sobrenome.
- Realizar a consulta de uma pessoa pelo nome.
- Realizar a remoção de uma pessoa pelo id.
- Realizar a listagem de todas as pessoas.
- Realizar o cadastro das salas do evento, com nome e lotação.
- Realizar a consulta de uma sala específica pelo id.
- Realizar a alteração do nome e da lotação de uma sala específica.

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
