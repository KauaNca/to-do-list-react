import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './TaskItem.css';

function TaskItem({ tarefa, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <div className="task-item__content">
        <Checkbox
          checked={tarefa.concluida}
          onChange={() => onToggle(tarefa.id)}
          sx={{
            color: '#4CAF50',
            '&.Mui-checked': {
              color: '#4CAF50',
            },
            '& .MuiSvgIcon-root': {
              fontSize: 24,
            },
          }}
        />
        <span className={`task-item__text ${tarefa.concluida ? 'task-item__text--completed' : ''}`}>
          {tarefa.titulo}
        </span>
      </div>
      <button 
        className="task-item__delete"
        onClick={() => onDelete(tarefa.id)}
        title="Deletar tarefa"
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default TaskItem;