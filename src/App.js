import React from'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Router';
import { AnimatePresence } from "framer-motion"
function App() {
  return (
    <div className='container mx-auto'>
      <AnimatePresence>
      <RouterProvider
      router={router}
      ></RouterProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
