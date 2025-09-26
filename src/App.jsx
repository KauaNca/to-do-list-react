import "./App.css";
import SimpleContainer from "./components/layout/Container";
import React from "react";
import Input from "./components/form/Input";
import Botao from "./components/form/Botao";
import { CheckCircle2 } from "lucide-react";

function App() {
  const handleAddTask = () => {
    console.log("Adicionar tarefa");
  };

  return (
    <>
      <SimpleContainer maxWidth="false" bgcolor="white" height="90vh">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-medium">
              <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              To-Do List
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Organize suas tarefas de forma simples e eficiente
          </p>
        </div>
        <div className="input-container">
          <Input placeholder="Digite sua nova tarefa..." />
          <Botao onClick={handleAddTask} />
        </div>
      </SimpleContainer>
    </>
  );
}

export default App;
