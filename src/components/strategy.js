import React from 'react';
import styles from '../styles/strategy.module.scss'

export default function Strategy () {

  return (
    <div className={styles.wrapper}>
        {/* <h1>Strategy</h1> */}
        <div className={styles.cardWrapper}>
          <h3 >Prospecting</h3>
          <p>Finding potential clients, those who may or may not be a good fit</p>
        </div>
        <div className={styles.cardWrapper}>
          <h3>Contacting</h3>
          <p>Email/Call/Visit</p>
        </div>
        <div className={styles.cardWrapper}>
          <h3>Meeting/Follow Up</h3>
          <p>Set up a time to meet and bring samples</p>
        </div>
        <div className={styles.cardWrapper}>
          <h3>Step 4</h3>
          <p>Following up, making sure there is communication</p>
        </div>
    </div>
  )
}