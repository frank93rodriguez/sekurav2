// LoginPage.tsx
import React, { useState } from 'react';


const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-1/2 h-10"> Asistencias</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 h-10"> Descuentos</button>
      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-1/2 h-10"> Sucursales</button>
    </div>
  );
};

export default HomePage;
