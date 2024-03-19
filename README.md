# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição:

O aplicativo fullstack permite aos usuários visualizar, criar e editar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend é responsável pela interface do usuário e a comunicação com a API. O backend é responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Requisitos do Frontend:

1. Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
2. Permitir a criação de um novo cliente através de um formulário.
3. Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
4. Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
5. Comunicar-se com a API para obter os dados dos clientes cadastrados.

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
