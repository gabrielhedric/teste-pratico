<h1 align="center">
  Teste Técnico Prático - Back-end
</h1>

## Sobre o TTP

A finalidade do TTP é desenvolver um sistema web que nos permita controlar a utilização dos automóveis de uma empresa. Para isso contruí uma WEB API com as funcionalidades que foram passadas. 

### Tecnologias Utilizadas

 * Node.JS
 * Express
 * TypeScript 
 * Princípios de SOLID SRP, DIP e LSP
 * Foi utilizado a persistência em memória para o desenvolvimento da aplicação

### Execução do Projeto 

 * Clonar o repositório: git clone https://github.com/gabrielhedric/teste-pratico-seidor.git
 
 * Navegar a até a pasta do repositório e executar **`yarn`** no seu terminal
 
 * Depois que instalar as dependências do projetos, podemos executar **`yarn dev `** no terminal e utilizar a aplicação.

 * Para verificação das solicitações da API foi utilizado o Insomnia
 
### Rotas Automóvel: 

**Criando um automóvel**:   **`POST`**

![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/automobiles/createAutomobile.png?raw=true)

**Listando todos os automóveis cadastrados:**   **`GET`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/automobiles/listAllAutomobiles.png?raw=true)

**Listando automóvel cadastrado buscando pelo ID:**   **`GET`**

![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/automobiles/listByIdAutomobile.png?raw=true)

**Atualizando automóvel cadastrado buscando pelo ID:**  **`PUT`**

![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/automobiles/updateAutomobile.png?raw=true)

**Deletando um automóvel:   **`DELETE`**

![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/automobiles/deleteAutomobile.png?raw=true)

### Rotas Motorista: 

**Criando um motorista** **`POST`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/drivers/createDriver.png?raw=true)

**Listando todos os motoristas cadastrados** **`GET`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/drivers/listAllDrivers.png?raw=true)

**Listando motorista pelo ID** **`GET`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/drivers/listByIdDriver.png?raw=true)

**Atualizando motorista** **`PUT`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/drivers/updateDriver.png?raw=true)

**Excluindo motorista** **`DELE`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/drivers/deleteDriver.png?raw=true)

### Rotas Utilização do Automóvel: 

**Criando o registro de uso do automóvel com o ID do motorista** **`POST`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/criando-registro-de-uso.png?raw=true)

**Listando o registro de uso do automóvel** **`GET`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/listando-automovel-em-uso.png?raw=true)

**Verificação de outro motorista tentando utilizar o mesmo automóvel** **`POST`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/outro-motorista-tentando-usar-mesmo-automovel.png?raw=true)

**Finalizando o uso do automóvel** **`POST`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/fianlizando-uso-do-automovel.png?raw=true)

**Listagem da finalização do uso do automóvel** **`GET`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/listando-finalizacao-uso-automovel.png?raw=true)

**Depois de finalizado o uso do automóvel, outro motorista utilizando** **`POST`**
![img](https://github.com/gabrielhedric/teste-pratico-seidor/blob/master/images/useAutomobiles/depois-de-finalizado-o-uso-motorista-utilizando.png?raw=true)

