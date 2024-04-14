#Aplicação Full Stack de Gerenciamento de Clientes

## Descrição:

Esta aplicação permite aos usuários visualizar, criar e editar clientes. A aplicação consiste em duas partes: o frontend e o backend. O frontend é responsável pela interface do usuário e a comunicação com a API. O backend é responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Requisitos do Frontend:

1. Exibe uma lista com todas as informações dos clientes.
2. Possibilita cadastro de um novo cliente.
3. Oferece opção de editar dados de um cliente, usa alertas para dados inválidos. 
4. Valida os dados (CPF e telefone) para garantir dados corretos e consistentes. 

## Requisitos do Backend:

Criar uma API que ofereça endpoints para:
1. Obter a listagem de clientes cadastrados.
2. Cadastrar um novo cliente com informações válidas.
3. Atualizar informações de cliente existente.
4. Armazenar os dados do cliente de forma persistente.

## Tecnologias utilizadas:

 **Backend:** 
  Node.js
  Express.js
  Sequelize
  Sequelize-CLI
  MySQL2
  Joi
  Cors
  CPF-CNPJ Validator
  Telefone
  
 **Frontend:** 
  React
  React Hooks
  Axios
  Vite


## Instalação do projeto

### Instalação com o Docker:
Certifique-se de ter o Docker instalado em sua máquina.
No diretório raiz do projeto, execute o seguinte comando para iniciar os contêineres Docker:

0. Certifique-se que esteja no diretório App:
```sh
cd app/
```

1. No diretório app execute serviços do Docker (ao iniciar o docker as depências já serão instaladas):
```sh
npm run compose:up
```
2. Com os containers inciados acesse o container app_backend e popule o banco:

Acesse o diretório do backend:
```sh
cd backend
```
Execute o comando para acessar o bash:
```sh
docker exec -it app_backend sh
```

No bash execute o comando:
```sh
npm prestart 
```

3. Acesse a aplicação no seu navegador em http://localhost:3000.

### Instalação sem o Docker
Para instalar e executar o projeto sem o Docker, siga os passos abaixo:

0. Certifique-se que esteja no diretório App:
```sh
cd app
```

1. No diretório app/frontend, instale as dependências do frontend:
```sh
cd frontend
npm install
```

2. No diretório app/backend, instale as dependências do backend:
```sh
cd backend
npm install
```

3. Crie e popule o banco de dados:
```sh
cd backend
npm run db:reset
```
Inicie o servidor do backend:
```sh
npm start
```

5. Inicie o servidor do frontend:
```sh
cd ../frontend
npm start
```

Acesse a aplicação no seu navegador em http://localhost:3000.
