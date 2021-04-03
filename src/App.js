import React, {useEffect, useState} from 'react';
import styles from './styles/app.module.scss';
import Sidebar from './components/sidebar';
import {ClientContext} from './context/clientsContext';




function App() {

  return (
    <ClientContext>
       <Sidebar />    
   </ClientContext>
  );
}

export default App;
