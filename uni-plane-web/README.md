# UniPlane Web - Frontend

Frontend Next.js para o sistema de reserva de voos **UniPlane**.

## 📋 Descrição

Aplicação web moderna para reserva de passagens aéreas, desenvolvida com **Next.js 14+**, **TypeScript**, **Tailwind CSS** e componentes **shadcn/ui**.

## ✨ Funcionalidades

- 🔍 **Busca de Voos**: Busque voos por origem, destino e data
- 💺 **Seleção de Assentos**: Interface intuitiva para escolher seus assentos
- 📋 **Formulário de Reserva**: Dados de passageiros e método de pagamento
- ✅ **Confirmação**: Número de reserva e resumo completo
- 👤 **Autenticação**: Sistema de login para passageiros e administradores
- 🎛️ **Painel Admin**: Funcionalidades administrativas (futuro)

## 🛠️ Stack Tecnológico

- **Next.js 14.2.0** - Framework React com SSR/SSG
- **React 18.3.1** - Biblioteca de UI
- **TypeScript 5.3.3** - Tipagem estática
- **Tailwind CSS 3.4.1** - Estilização utilitária
- **shadcn/ui** - Componentes de alta qualidade
- **Radix UI** - Primitivas acessíveis
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🏗️ Estrutura de Pastas

```
uni-plane-web/
├── app/                      # App Router (Next.js 14+)
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globais
├── components/              # Componentes React
│   ├── Header.tsx           # Cabeçalho
│   ├── FlightSearch.tsx     # Busca de voos
│   └── ui/                  # Componentes UI (shadcn)
├── lib/                     # Utilitários e tipos
│   ├── types.ts            # Definições de tipo
│   ├── mockData.ts         # Dados mockados
│   └── utils.ts            # Funções auxiliares
├── public/                 # Arquivos estáticos
├── tailwind.config.ts      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências
```

## 📝 Dados Mockados

A aplicação atualmente usa dados mockados localizados em `lib/mockData.ts`. Após a integração com o backend NestJS, esses dados serão substituídos por chamadas à API.

## 🚀 Build

```bash
npm run build
npm run start
```

## 🔍 Lint

```bash
npm run lint
```

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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
