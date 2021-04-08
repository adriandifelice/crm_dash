import styles from '../styles/maindash.module.scss'
import React from 'react';
import Accord from './accordionMainDash';

export default function Dashboard () {
  
  return (
  <div className={styles.wrapper}>
    <Accord title={'Not Contacted'}/>
    <Accord title={'Contacted'}/>
    <Accord title={'Responded'}/>
    <Accord title={'Meeting'}/>
    <Accord title={'Closed'}/>
  </div>
  )
}