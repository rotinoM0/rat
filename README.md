<div align="center">
  <img align="center" src="https://github.com/user-attachments/assets/96bf502f-4fd4-4003-b0d6-43151c9f8b05" alt="rat logo">
</div>

---

<div align="center">
  
[Adicionar ao Discord](https://discord.com/oauth2/authorize?client_id=894965508166795304&permissions=8&integration_type=0&scope=bot) • [Reportar Bug](https://github.com/rotinom0/rat/issues) • [Solicitar Feature](https://github.com/rotinom0/rat/issues)

</div>


## Sobre o Projeto

RAT é um bot Discord desenvolvido para facilitar sessões de RPG de mesa online. Criado como projeto pessoal para estudos de lógica e arquitetura de software, o RAT oferece comandos simples e intuitivos para tornar suas aventuras mais dinâmicas e organizadas.

### Funcionalidades

- 🎲 **Rolagem de Dados**: Role qualquer quantidade de dados com diferentes faces
  - Exemplo: `/roll dados:2` rola 2 dados de 20 faces ou `roll faces:6` rola 1 dado de 6 faces
- 📋 **Lista de Iniciativa**: Crie e gerencie a ordem de turnos usando mensagens embed elegantes
- 🎮 **Comandos Simples**: Interface intuitiva para facilitar o fluxo do jogo

---

## Como Usar

### Adicionar o Bot ao seu Servidor

1. Clique no link de convite: [Adicionar RAT](https://discord.com/oauth2/authorize?client_id=894965508166795304&permissions=8&integration_type=0&scope=bot)
2. Selecione o servidor desejado
3. Autorize as permissões necessárias
4. Comece a usar os comandos!

### Comandos Disponíveis

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `/roll [dados]` | Rola dados no formato NdM | `/roll dados: 2` |
| `/iniciativa` | Cria uma lista de iniciativa | `/iniciativa` |
| `/help` | Mostra todos os comandos disponíveis | `/help` |

---

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Discord.js](https://discord.js.org/)** - Framework para bots Discord
- **JavaScript ES6+** - Linguagem de programação

---

## Instalação para Desenvolvimento

Quer rodar o bot localmente ou contribuir? Siga os passos abaixo:

### Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn
- Uma conta Discord e um bot criado no [Discord Developer Portal](https://discord.com/developers/applications)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/rat.git
cd rat
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione seu token:
```env
token=seu_token_de_developer_aqui
```

---

## Estrutura do Projeto

```
rat/
├── src/
│   ├── assets/        # Assets para serem usados pelo bot
│   ├── commands/      # Comandos para o bot
│   └── events/        # Eventos do Discord
├── .env.example       # Template de variáveis de ambiente
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Dependências e scripts
└── README.md          # Documentação
```

---

## Como Contribuir

Contribuições são muito bem-vindas! Este é um projeto de estudos e toda ajuda é apreciada.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

Feito por amor como projeto de estudos

**Matheus Fernandes**

- GitHub: [@rotinoM0](https://github.com/rotinom0)

---

## Agradecimentos

- Comunidade Discord.js pela excelente documentação
- Todos que testaram e deram feedback no bot
- Você, por se interessar pelo projeto!

---

<div align="center">

**Se este projeto te ajudou, considere dar uma ⭐!**

</div>
