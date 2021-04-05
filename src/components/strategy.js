import React from 'react';
import styles from '../styles/strategy.module.scss'

export default function Strategy () {

  return (
    <div className={styles.wrapper}>
        <h1>Strategy</h1>
        <div>
          <h3>Step 1</h3>
          <p>Prospecting</p>
          <p>Finding potential clients, those who may or may not be a good fit</p>
        </div>
        <div>
          <h3>Step 2</h3>
          <p>Contacting</p>
          <p>Email/Call/Visit</p>
        </div>
        <div>
          <h3>Step 3</h3>
          <p>Following Up/Meeting</p>
          <p>Set up a time to meet and bring samples</p>
        </div>
        <div>
          <h3>Step 4</h3>
          <p>Closing</p>
          <p>Following up, making sure there is communication</p>
        </div>
    </div>
  )
}