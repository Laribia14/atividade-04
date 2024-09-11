import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [tasks, setTasks] = useState([]);

    // Carregar usuários
    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    // Carregar tarefas de um usuário
    useEffect(() => {
        if (selectedUser) {
            axios.get(`http://localhost:5000/api/tasks/${selectedUser._id}`)
                .then(res => setTasks(res.data))
                .catch(err => console.log(err));
        }
    }, [selectedUser]);

    return (
        <div>
            <h1>Gerenciamento de Tarefas</h1>
            <UserForm setUsers={setUsers} />
            <div>
                <h2>Usuários</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id} onClick={() => setSelectedUser(user)}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedUser && (
                <>
                    <TaskForm userId={selectedUser._id} setTasks={setTasks} />
                    <TaskList tasks={tasks} />
                </>
            )}
        </div>
    );
}

export default App;
