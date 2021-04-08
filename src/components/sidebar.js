import React, {useState} from 'react';
import styles from '../styles/sidebar.module.scss'
import Clients from './clientList';
import Dashboard from './mainDash';
import Discover from './discover';
import Prospects from './prospects';
import Strategy from './strategy';


function Sidebar () {
  const [view, setView] = useState('Dashboard')

  return (
    <div className={styles.sidebarWrapper}>
    <nav className={styles.sidebar}>
      <div onClick={() => [setView('Dashboard')]} className={styles.navElementDiv}>
          <p  className={styles.navElementP}>Dashboard</p>
      </div>
      <div onClick={() => [setView('Clients')]}  className={styles.navElementDiv}>
          <p className={styles.navElementP}>Clients</p>  
      </div>
      <div onClick={() => [setView('Prospects')]} className={styles.navElementDiv}>
          <p  className={styles.navElementP}>Prospects</p>  
      </div>
      <div onClick={() => [setView('Discover')]} className={styles.navElementDiv}>
          <p  className={styles.navElementP}>Discover</p>  
      </div>
      <div onClick={() => [setView('Strategy')]} className={styles.navElementDiv}>
          <p  className={styles.navElementP}>Strategy</p>  
      </div>
    </nav>
    {view === 'Dashboard'? <Dashboard />:view === 'Clients'?<Clients/>:view === 'Discover'?<Discover />:view === 'Prospects'?<Prospects />:view === 'Strategy'?<Strategy />:null}
    </div>
  )

}

export default Sidebar;