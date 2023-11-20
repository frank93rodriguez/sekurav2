import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginFormComponent: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <img src="img/liacsa.png" alt="" className='m-auto'/>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Numero de membresia" className="border border-gray-300 h-12 rounded-lg p-2 mb-4 w-full text-center"/>
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="dd / mm / yyyy" className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-center"/>
      <div className='flex justify-center'>
      <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/3 h-10"> Acceso</button>
      </div>
    </form>
  );
};

export default LoginFormComponent;