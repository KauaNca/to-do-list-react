import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } }; //acessibilidade padrão

export default function Checkboxe({ tarefa, onClick }) {
  return (
    <div>
      <Checkbox
        {...label}
        onClick={() => {
          console.log("Botão clicado");
        }}
      />
      {tarefa}
    </div>
  );
}
