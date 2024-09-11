import React from 'react';

function TaskList({ tasks }) {
    return (
        <div>
            <h3>Lista de Tarefas</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} - {task.completed ? 'Concluída' : 'Pendente'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
