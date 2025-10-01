import React from 'react';
import './TaskStats.css';

function TaskStats({ totalTasks, completedTasks }) {
  return (
    <div className="task-stats">
      <div className="task-stats__item">
        <span className="task-stats__number">{totalTasks}</span>
        <span className="task-stats__label">
          {totalTasks === 1 ? 'tarefa' : 'tarefas'}
        </span>
      </div>
      <div className="task-stats__divider"></div>
      <div className="task-stats__item">
        <span className="task-stats__number task-stats__number--completed">
          {completedTasks}
        </span>
        <span className="task-stats__label">
          {completedTasks === 1 ? 'concluída' : 'concluídas'}
        </span>
      </div>
    </div>
  );
}

export default TaskStats;