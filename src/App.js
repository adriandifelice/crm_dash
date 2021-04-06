import React, {useEffect, useState} from 'react';
import styles from './styles/app.module.scss';
import Sidebar from './components/sidebar';
import {ClientContext} from './context/clientsContext';
import {ProspectContext} from './context/prospectContext';
// import {DiscoveryContext} from './context/discoverContext';



function App() {
  return (
    // <DiscoveryContext>
        <ClientContext>
          <ProspectContext>
            <Sidebar />    
          </ProspectContext>
      </ClientContext>
      // </DiscoveryContext>
  );
}

export default App;
