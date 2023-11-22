// LoginPage.tsx
import React, { useState } from 'react';


const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <div className='grid grid-cols-12 border border-gray-3 rounded-lg shadow-md p-5 m-3'>
          <div className='col-span-4 flex items-center'>
            <img src="img/liacsa.png" alt="" className='m-auto'/>
          </div>
          <div className='col-span-8 text-right'>
            <span className='text-green-700 font-bold text-xs mr-2'>Miembros desde:</span><span>0</span>
            <p className='text-blue-600 font-bold text-sm mt-5 mb-6'>RENATA SAVOCA LOYOLA:</p>
            <span className='text-blue-600 font-bold text-xs'>No. DE MEMBRESIA:</span><span className='text-xs'> 13104-000002-02</span>
            <p className='text-xs mt-2'>Vence: 31 de Diciembre de 2024</p>
          </div>
        </div>
      </div>
      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-1/2 h-10 my-1.5"> Asistencias</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 h-10 my-1.5"> Descuentos</button>
      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-1/2 h-10 my-1.5"> Sucursales</button>
    </div>
  );
};

export default HomePage;
