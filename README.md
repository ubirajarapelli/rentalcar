# Rent a Car

## Instruções para rodar o teste

### instalação
1. Você precisará ter o **Node.Js** V6+ instalado em sua máquina, você pode baixar e instalar [neste link do site oficial](https://nodejs.org/en/)

    **Permissões**
    Antes de comecar as instalações, é bom saber. Em sistemas baseados em Unix, pode ocorrer erros por falta de permissão de escrita, para isso, rode o comando `sudo` ex:

    ```sh
    $ sudo npm install @angular/cli -g
    ```

2. Para o _css preprocessor_ você precisará utilizar o [sass](http://sass-lang.com/)

	**Instalação do sass**
Existem diversos modos de instalação do sass, cheque o site oficial (link acima), mas você consegue instalar via NPM.
No terminal rode o comando abaixo:

    ```sh
    $ npm install node-sass
    ```
4. Você precisa fazer um fork do projeto

    ```sh
    https://github.com/ubirajarapelli/rent-a-car.git
    ```
5. **Clone o projeto**
    No terminal rode o comando abaixo, no diretório desejado

    ```sh
    $ git clone https://github.com/ubirajarapelli/rent-a-car.git
    ```

6. **Acesse o diretório do projeto**
    No terminal rode o comando abaixo

    ```sh
    $ cd rent-a-car
    ```

7. **Instale as dependências**
    No terminal rode o comando abaixo

    ```sh
    $ npm install
    ```

#### Rodando o projeto

1. **Realizando o Build**
    No terminal rode o comando abaixo

    ```sh
    $ npm run build
    ```
    Rode esse comando toda vez que você adicionar novos arquivos no diretório `src` e em seus subdiretórios.
2. **Rodando o projeto (Dev)**

    ```sh
    $ npm run start
    ```
3. **Rodando os teste unitários**

    ```sh
    $ npm run test
    ```
