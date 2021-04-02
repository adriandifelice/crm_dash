import React from 'react';
import styles from './styles/app.module.scss';
import Sidebar from './components/sidebar';
import Clients from './components/clientList';
import {ClientContext} from './context/clientsContext';




function App() {


  return (
    <ClientContext>
    <div className={styles.appWrapper}>
        <Sidebar />
        <Clients />
    </div>
   </ClientContext>
  );
}

export default App;
