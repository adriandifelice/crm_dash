import React, {useState} from 'react';
import styles from '../styles/sidebar.module.scss'
import Clients from './clientList';
import Dashboard from './mainDash';
import Discover from './yel';

function Sidebar () {
  const [view, setView] = useState('Dashboard')

  return (
    <div className={styles.sidebarWrapper}>
    <nav className={styles.sidebar}>
      <div className={styles.navElementDiv}>
          <p onClick={() => [setView('Dashboard')]} className={styles.navElementP}>Dashboard</p>
      </div>
      <div>
          <p onClick={() => [setView('Clients')]} className={styles.navElementP}>Clients</p>  
      </div>
      <div>
          <p onClick={() => [setView('Discover')]} className={styles.navElementP}>Discover</p>  
      </div>
    </nav>
    {view === 'Dashboard'? <Dashboard />:view === 'Clients'?<Clients/>:view === 'Discover'?<Discover />:null}
    </div>
  )

}

export default Sidebar;