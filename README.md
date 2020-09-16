# Proffy
Projeto desenvolvido durante a Next Level Week 2, realizada pela @Rocketseat durante os dias 3 a 9 de Agosto de 2020.
 O projeto visa conectar alunos que querem estudar e professores que querem ensinar.
 
 # Telas
 ![Proffy](https://github.com/MariaMuniz/Ecoleta/blob/master/img/img1.png)
 ![Proffy](https://github.com/MariaMuniz/Ecoleta/blob/master/img/img2.png)
 ![Proffy](https://github.com/MariaMuniz/Ecoleta/blob/master/img/img3.png) 
 
 # Instalação
  # Server
Aplicação feita em Node.js e Typescript que utiliza o SQLite como banco de dados. Ele é indispensável para a aplicação, portanto deve ser o primeiro a entrar em funcionamento.
*  Navegue até a pasta server digite:
yarn start

*  Para instalar todas as dependências do projeto digite:
yarn install

* Para criar as tabelas no banco de dados digite:
yarn knex:migrate

* Para rodar a aplicação digite:
yarn start

 # Rotas da Aplicação
 
 Listagem de professores: GET: /classes

Criação de professor: POST: /classes

Retorna a quantidade de conexões feitas: GET: /connection

Criação de uma conexão: POST: /connection
#  WEB
Aplicação feita inteiramente em React.js e Typescript, que consome uma API REST fornecida pelo server.

* Navegue até a pasta web

 * Para instalar todas as dependências do projeto:
 yarn install

* Para rodar a aplicação:
yarn start
#  Dependências de desenvolvimento

Server

* cors
* express
* knex
* sqlite3
* typescript
#  Web
* axios
* react-router-dom
* typescript

# Mobile
* expo-google-fonts
* react-native-community/async-storage
* react-native-community/masked-view
* react-navigation/bottom-tabs
* react-navigation/native
* react-navigation/stack
* axios
* expo
* expo-font
* react-native-gesture-handler
* typescript
