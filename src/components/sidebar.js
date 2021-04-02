import React from 'react';
import styles from '../styles/sidebar.module.scss'

function Sidebar () {

  return (
    <nav className={styles.sidebar}>
    <div className={styles.navElementDiv}>
        <p className={styles.navElementP}>Dashboard</p>
    </div>
    <div>
        <p className={styles.navElementP}>Clients</p>  
    </div>
     
    </nav>
  )

}

export default Sidebar;