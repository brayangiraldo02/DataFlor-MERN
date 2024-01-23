import axios from 'axios';

const authenticate = async (username, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/login`, { "username": username, "password": password });
    console.log(response);
    if (response.token) {
      localStorage.setItem('token', JSON.stringify(response.token));
    }
  } catch (error) {
    throw new Error('Error de autenticación');
  }
};

const logout = () => {
  localStorage.clear();
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { authenticate, logout, getToken };
