# ComuniKids

> Aplicativo de Comunicação Alternativa Aumentativa (CAA) para crianças com autismo. Criado com Expo, React Native e Expo Router.

---

## 🧠 Sobre o Projeto
O **ComuniKids** é um aplicativo que auxilia crianças com autismo a se comunicarem através de símbolos e sons. Pais e tutores podem configurar frases, acompanhar o uso e ajudar na evolução da comunicação da criança.

---

## 🚀 Tecnologias Utilizadas
- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [Expo Router](https://expo.github.io/router/docs)
- [expo-speech](https://docs.expo.dev/versions/latest/sdk/speech/)

---

## 📱 Como Rodar o Projeto

### Pré-requisitos
- Node.js (LTS)
- Expo CLI: `npm install -g expo-cli`
- App **Expo Go** no celular

### Passos
```bash
# Clone o repositório
git clone https://github.com/swashjoao/comunikids.git

# Acesse a pasta
cd comunikids

# Instale as dependências
npm install

# Rode o app
npx expo start
```
Escaneie o QR code no terminal com o Expo Go no seu celular 📲

---

## 🧪 Estrutura do Projeto
```
app/
├── _layout.tsx          # Stack Navigation base
├── login.tsx            # Tela de Login
├── home.tsx             # Tela principal
├── anamnese.tsx         # Cadastro da criança
└── comunicar.tsx        # Tela com frases e voz
```

---

## 🛠 Fluxo de Branches

| Tipo        | Padrão                  | Descrição                              |
|-------------|--------------------------|----------------------------------------|
| Base        | `master`                | Produção                               |
| Dev         | `dev`                   | Branch principal de desenvolvimento    |
| Feature     | `feat/nome-da-tarefa`   | Funcionalidades novas                  |
| Correção    | `fix/nome-do-bug`       | Correções pontuais                     |

```bash
# Exemplo para nova feature
git checkout -b feat/tela-login
```

---

## 📸 Prints
> *(Adicione prints ou gifs do app rodando aqui depois)*

---

## 👨‍💻 Autor
- João Vitor da Silva Rodrigues — [@swashjoao](https://github.com/swashjoao)

---

## 📄 Licença
MIT
