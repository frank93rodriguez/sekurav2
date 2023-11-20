// LoginPage.tsx
import React, { useState } from 'react';
import AuthService from '../../../services/AuthService/AuthService';
import LoginFormComponent from './components/LoginFormComponent';


const LoginPage: React.FC = () => {
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await AuthService.login(username, password);
      // Lógica de redirección en caso de inicio de sesión exitoso
      console.log('Usuario autenticado:', response.username);
    } catch (error) {
      setLoginError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1> */}
      <LoginFormComponent onSubmit={handleLogin} />
      {loginError && <p className="text-red-500">{loginError}</p>}
    </div>
  );
};

export default LoginPage;
