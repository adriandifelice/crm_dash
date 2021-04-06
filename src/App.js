import React, {useEffect, useState} from 'react';
import styles from './styles/app.module.scss';
import Sidebar from './components/sidebar';
import {ClientContext} from './context/clientsContext';
import {ProspectContext} from './context/prospectContext';




function App() {
  return (

        <ClientContext>
          <ProspectContext>
            <Sidebar />    
          </ProspectContext>
      </ClientContext>
   
  );
}

export default App;
