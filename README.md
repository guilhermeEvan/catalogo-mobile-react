
# Catálogo Mobile📱


Aplicativo mobile de catálogo de produtos desenvolvido com React Native utilizando Expo e navegação baseada em arquivos com Expo Router.

O objetivo do projeto é demonstrar a criação de uma aplicação mobile moderna consumindo dados de uma API externa, organizando estado global com Redux e implementando navegação entre telas.

🚀 Status do Projeto 🚧 Em desenvolvimento

Funcionalidades principais já implementadas:

Login (simulado)

Listagem de produtos por categoria

Consumo de API externa

Navegação entre telas

Detalhes do produto

Gerenciamento de estado com Redux

📸 Preview do Aplicativo

(adicione screenshots aqui depois)

Exemplo:

Login → Home → Lista de Produtos → Detalhes do Produto
🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:

React Native

Expo (SDK 54)

Expo Router

TypeScript

Redux Toolkit

React Redux

Axios

ESLint

Outros módulos importantes:

expo-image

expo-font

expo-splash-screen

expo-haptics

expo-constants

📂 Estrutura do Projeto
catalogo-mobile
│
├── app/                     # Rotas do Expo Router
│   ├── _layout.tsx          # Layout principal da aplicação
│   ├── index.tsx            # Tela inicial (Login)
│   ├── home.tsx             # Tela principal do catálogo
│   └── produto/
│       └── [id].tsx         # Tela de detalhes do produto
│
├── src/
│   ├── screens/             # Telas da aplicação
│   │   ├── tela-login-screen
│   │   └── tela-home-screen
│   │
│   ├── store/               # Configuração do Redux
│   │   ├── store.ts
│   │   └── productSlice.ts
│   │
│   ├── services/            # Configuração de APIs
│   │   └── api.ts
│   │
│   ├── components/          # Componentes reutilizáveis
│   │
│   └── constants/           # Constantes da aplicação
│
├── assets/                  # Imagens e recursos visuais
│
├── package.json
├── tsconfig.json
└── README.md
⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

Node.js versão 18 ou superior

npm ou yarn

Expo CLI (opcional)

Instalação do Expo CLI:

npm install -g expo-cli

Ou utilize:

npx expo

Também é necessário:

Expo Go instalado no celular
ou

Emulador Android / Simulador iOS

▶️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/catalogo-mobile.git
2️⃣ Entrar na pasta do projeto
cd catalogo-mobile
3️⃣ Instalar dependências
npm install

ou

yarn install
4️⃣ Iniciar o projeto
npx expo start
5️⃣ Abrir o aplicativo

Após iniciar o servidor, escolha uma opção:

a → Abrir no Android
i → Abrir no iOS
w → Abrir no navegador

Ou escaneie o QR Code usando o Expo Go no celular.

📦 Scripts Disponíveis
npm run start       # Inicia o servidor Expo
npm run android     # Abre no Android
npm run ios         # Abre no iOS (Mac)
npm run web         # Abre no navegador
npm run lint        # Executa verificação de código
🌐 API Utilizada

O aplicativo consome dados de uma API pública de produtos:

Fake Store API

Exemplo de endpoints utilizados:

/products
/products/category/men's clothing
/products/category/women's clothing

Esses endpoints são utilizados para listar produtos e exibir detalhes.

🧠 Gerenciamento de Estado

O gerenciamento de estado global é realizado utilizando Redux Toolkit, permitindo:

armazenar lista de produtos

compartilhar dados entre telas

evitar prop drilling

centralizar estado da aplicação

📱 Funcionalidades Implementadas

✔ Tela de login
✔ Navegação entre telas
✔ Listagem de produtos
✔ Categorias (Masculino / Feminino)
✔ Tela de detalhes do produto
✔ Consumo de API externa
✔ Gerenciamento de estado com Redux

🔮 Melhorias Futuras

Funcionalidades planejadas:

Carrinho de compras

Favoritos

Busca de produtos

Filtro por categorias

Perfil do usuário

Persistência de login

Melhorias de UI/UX

🤝 Contribuição

Contribuições são bem-vindas.

Passos para contribuir:

Faça um fork do projeto

Crie uma branch

git checkout -b feature/minha-feature

Commit suas alterações

git commit -m "feat: nova funcionalidade"

Envie para o repositório

git push origin feature/minha-feature

Abra um Pull Request

📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Autor

Desenvolvido por Guilherme Evangelista

📍 Rio de Janeiro — Brasil 🇧🇷
