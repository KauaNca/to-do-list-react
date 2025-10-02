import "./App.css";
import SimpleContainer from "./components/layout/Container";
import React, { useState, useEffect } from "react";
import Input from "./components/form/Input";
import Botao from "./components/form/Botao";
import { CheckCircle2 } from "lucide-react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TaskItem from "./components/form/TaskItem";
import TaskStats from "./components/form/TaskStats";
import Notification from "./components/form/Notification";

function App() {
  const [tarefa, setTarefa] = useState([]); // Estado para armazenar as tarefas
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  const showNotification = (message, type) => {
    setNotification({
      message,
      type,
      isVisible: true,
    });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  const handleAddTask = () => {
    // Validação para campo vazio
    if (!input.trim()) {
      showNotification("Por favor digite alguma tarefa", "error");
      return;
    }

    const novaTarefa = { titulo: input.trim(), concluida: false };
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
        setInput(""); // Limpa o campo de entrada após adicionar a tarefa
        buscarTarefas(); // Atualiza a lista de tarefas
        showNotification("Tarefa adicionada com sucesso", "success");
      })
      .catch((error) => {
        console.error("Erro ao adicionar tarefa:", error);
        showNotification("Erro ao adicionar tarefa. Tente novamente.", "error");
      });
  };
  const handleToggleTask = (id) => {
    const tarefaAtual = tarefa.find((t) => t.id === id); //quando encontra, ele retorna o objeto
    if (!tarefaAtual) return;
    const tarefaAtualizada = {
      ...tarefaAtual,
      concluida: !tarefaAtual.concluida,
    };

    fetch(`http://localhost:5000/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefaAtualizada),
    })
      .then((resp) => resp.json())
      .then(() => {
        buscarTarefas();
      })
      .catch((error) => {
        console.error("Erro ao atualizar tarefa:", error);
      });
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:5000/tarefas/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        buscarTarefas();
        showNotification("Tarefa removida com sucesso", "success");
      })
      .catch((error) => {
        console.error("Erro ao deletar tarefa:", error);
        showNotification("Erro ao remover tarefa. Tente novamente.", "error");
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
  return (
    <>
      <SimpleContainer
        maxWidth="false"
        // bgcolor="white"
        sxContainer={{
          minWidth: "40vw",
          padding: "20px 0",
          minHeight: "100vh",
        }}
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
          />
          <Botao onClick={handleAddTask} />
        </div>
        {/* Estatísticas das tarefas */}
        {tarefa.length > 0 && (
          <TaskStats
            totalTasks={tarefa.length}
            completedTasks={tarefa.filter((t) => t.concluida).length}
          />
        )}

        {/* Lista de tarefas */}
        <div className="tasks-container">
          {tarefa.length === 0 && (
            <SimpleContainer
              sxContainer={{
                backgroundColor: "white",
                textAlign: "center",
                marginTop: "20px",
                padding: "40px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <AssignmentOutlinedIcon style={{ fontSize: 70, color: "#ccc" }} />
              <p
                style={{
                  fontSize: 20,
                  color: "#333",
                  fontWeight: "bold",
                  marginTop: "16px",
                }}
              >
                Nenhuma tarefa ainda
              </p>
              <p style={{ fontSize: 16, color: "#666", marginTop: "8px" }}>
                Comece adicionando sua primeira tarefa acima!
              </p>
            </SimpleContainer>
          )}

          {tarefa.length > 0 &&
            tarefa.map((tarefaItem) => (
              <TaskItem
                key={tarefaItem.id}
                tarefa={tarefaItem}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))}
        </div>

        {/* Componente de notificação */}
        <Notification
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={hideNotification}
        />
      </SimpleContainer>
    </>
  );
}

export default App;
