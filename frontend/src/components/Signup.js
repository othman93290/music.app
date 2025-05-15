import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      setMessage('Compte créé, connectez-vous !');
    } catch (err) {
      setMessage('Erreur : ' + err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Pseudo" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
      <button type="submit">Créer mon compte</button>
      <div>{message}</div>
    </form>
  );
}