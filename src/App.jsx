import "./App.css";
import SimpleContainer from "./components/layout/Container";
import React, { useState, useEffect } from "react";
import Input from "./components/form/Input";
import Botao from "./components/form/Botao";
import { CheckCircle2 } from "lucide-react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

function App() {
  const handleAddTask = () => {
    const novaTarefa = { titulo: input, concluida: false };
    fetch("http://localhost:5000/tarefas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaTarefa),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Tarefa adicionada:", data);
      })
      .catch((error) => {
        console.error("Erro ao adicionar tarefa:", error);
      });
  };
  function buscarTarefas() {
    fetch("http://localhost:5000/tarefas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTarefa(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }
  useEffect(buscarTarefas, []); //Quando o componente for montado, buscar as tarefas

  const [tarefa, setTarefa] = useState([]); // Estado para armazenar as tarefas
  const [input, setInput] = useState("");
  return (
    <>
      <SimpleContainer
        maxWidth="false"
        bgcolor="white"
        height="100vh"
        sxContainer={{ minWidth: "40vw" }}
      >
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
          <Input
            type="text"
            placeholder="Digite sua nova tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Botao onClick={handleAddTask} />
        </div>
        {/* Renderize a lista de tarefas aqui */}
        {tarefa.length === 0 && (
          <SimpleContainer
            sxContainer={{
              backgroundColor: "white",
              textAlign: "center",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AssignmentOutlinedIcon style={{ fontSize: 70, color: "black" }} />
            <p style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
              Nenhuma tarefa ainda
            </p>
            <p style={{ fontSize: 16, color: "gray" }}>
              Comece adicionando sua primeira tarefa acima!{" "}
            </p>
          </SimpleContainer>
        )}

        {tarefa.length > 0 && <p>Há tarefas</p>}
      </SimpleContainer>
    </>
  );
}

export default App;
