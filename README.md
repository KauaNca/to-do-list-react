# 📝 To-Do List com React e Material UI

## 📌 Sobre o Projeto
Este é um projeto de **To-Do List** desenvolvido em **React** com **Material UI (MUI)** para estilização.  
O objetivo principal é praticar:
- Organização de tarefas com React (componentização, estados, props).
- Uso de componentes prontos do Material UI.
- Trabalho em equipe, estimulando **interatividade**, **compartilhamento de conhecimento** e **colaboração no GitHub**.

---

## 🎯 Funcionalidades
- ✅ Adicionar novas tarefas  
- ✅ Listar tarefas cadastradas  
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas  
- ✅ Visualizar estatísticas (total e concluídas)
- ✅ Notificações personalizadas para feedback
- ✅ Validação de entrada (impede tarefas vazias)
- ✅ Layout responsivo utilizando **Grid e Box** do MUI  
- ✅ Design moderno com cards individuais para cada tarefa
- ✅ Adicionar tarefas pressionando Enter  

---

## 🛠️ Tecnologias Utilizadas
- [React](https://react.dev/)  
- [Material UI](https://mui.com/)  
- [Vite](https://vitejs.dev/) (para desenvolvimento rápido)  
- [JSON Server](https://github.com/typicode/json-server) (API REST simulada)
- [Lucide React](https://lucide.dev/) (ícones modernos)
- [GitHub](https://github.com/) (colaboração e versionamento)  

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/todo-list-mui.git
### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor backend (JSON Server)
```bash
npm run backend
```

### 4. Em outro terminal, inicie o frontend
```bash
npm run dev
```

### 5. Acesse no navegador
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🎨 Melhorias Recentes

### ✨ Novas Funcionalidades Implementadas:
- **Layout aprimorado:** Cards individuais para cada tarefa com design moderno
- **Botão de deletar estilizado:** Ícone moderno com efeitos de hover
- **Contador de tarefas:** Exibe total de tarefas e quantas foram concluídas
- **Sistema de notificações:** Feedback visual personalizado para ações do usuário
  - "Tarefa Adicionada! Sua nova tarefa foi criada com sucesso."
  - "Oops! Por favor digite alguma tarefa" (validação de campo vazio)
- **Validação de entrada:** Impede adicionar tarefas vazias
- **Animações suaves:** Transições e efeitos hover em todos os elementos
- **Tecla Enter:** Permite adicionar tarefas pressionando Enter no campo de input

### 🎯 Componentes Criados:
- `TaskItem.jsx` - Item individual da tarefa com checkbox e botão delete
- `TaskStats.jsx` - Componente para exibir estatísticas das tarefas
- `Notification.jsx` - Sistema de notificações toast personalizadas

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── form/
│   │   ├── Botao.jsx          # Botão customizado
│   │   ├── Input.jsx          # Input responsivo
│   │   ├── TaskItem.jsx       # Item individual da tarefa
│   │   ├── TaskStats.jsx      # Estatísticas das tarefas
│   │   ├── Notification.jsx   # Sistema de notificações
│   │   └── Checkbox.jsx       # Checkbox customizado
│   └── layout/
│       └── Container.jsx      # Container principal
├── App.jsx                    # Componente principal
├── App.css                    # Estilos globais
└── main.jsx                   # Ponto de entrada
```

---

## 🤝 Contribuição
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request