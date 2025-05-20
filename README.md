# Sistema de Agendamento Médico - Frontend

Este é um projeto frontend em React + TypeScript para um sistema de agendamento de consultas médicas. A aplicação consome uma API REST mockada, executada via container Docker.

## 🔧 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) para validação
- [Docker](https://www.docker.com/) + Docker Compose


## 🚀 Como rodar o projeto

### 📦 Requisitos

- Node.js (v18+)
- Docker e Docker Compose
- NPM ou Yarn

---

### 🐳 Rodando com Docker + Docker Compose

1. **Build e subida dos containers:**

```bash
docker compose -f docker-compose.yml up --build
```

2. **Acesse a aplicação:**

* Frontend: [http://localhost](http://localhost)
* API mockada: [http://localhost:3000/api](http://localhost:3000/api)

O frontend será servido na porta `80`.

---


### ▶️ Rodando localmente (sem Docker)

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/agendamento-medico.git
cd agendamento-medico
````

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Configure a baseURL do Axios**

Se estiver rodando com a API local mockada no Docker, edite `src/api/axios.ts`:

```ts
baseURL: "http://localhost:3000/api"
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

Acesse a aplicação em [http://localhost:5173](http://localhost:5173) (ou porta do Vite).

---

## 📝 Observações

* A API mockada usada neste projeto é: `liviarachelc/medico-mockapi`, a implementação da API está em [Livia-Rachell/medico-mockapi/](http://github.com/Livia-Rachell/medico-mockapi/)

---

## 📬 Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail [liviarachelc@gmail.com](mailto:sliviarachelc@gmail.com).
