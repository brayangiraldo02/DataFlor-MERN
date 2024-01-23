// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/nav/NavBar';
import { authenticate, getToken } from '../../services/authService';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      authenticate(username, password);

      const token = getToken();

      if (token) {
        window.alert("Bienvenido");
        navigate('/');
      }
    } catch (error) {
      window.alert("Usuario o contraseña incorrectos");
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="loginContainer">
        <div className="principalContainerLogin">
          <div className="titleLoginContainer">
            <a className="navbar-logo" href="/"><img src="/img/dataflor.png" alt="Logo" /></a>
            <h1>INICIAR SESIÓN</h1>
          </div>
          <div className="principalContainerLoginForm">
            <form className="formularioInput" onSubmit={handleLogin}>
              <div className="usernameLoginContainer">
                <label htmlFor="usernameLogin" style={{ margin: '0 20px' }} className="username">Usuario:</label>
                <input type="text" id="usernameLogin" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="passwordLoginContainer">
                <label htmlFor="passwordLogin" style={{ margin: '0 20px' }} className="userpassword">Contraseña:</label>
                <input type="password" id="passwordLogin" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="buttonLoginContainer">
                <button id="buttonLogin" type="submit">INICIAR SESIÓN</button>
              </div>
              <div className="buttonBackContainer">
                <button onClick={() => navigate('/')} id="buttonBack">ATRÁS</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
