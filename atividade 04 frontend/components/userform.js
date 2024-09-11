import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ setUsers }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', { name, email })
            .then(res => {
                setUsers(users => [...users, res.data]);
                setName('');
                setEmail('');
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Criar Usuário</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button type="submit">Criar</button>
        </form>
    );
}

export default UserForm;
