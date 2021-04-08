import styles from '../styles/maindash.module.scss'
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Form from './formiktest';
import Accord from './accordionMainDash';

export default function Dashboard () {
  // const [prospects, _,  __, deleteProspect, updateStatus] = useContext(AppContext);

 
  
  return (
  <>
    <Accord title={'Not Contacted'}/>
    <Accord title={'Contacted'}/>
    <Accord title={'Responded'}/>
    <Accord title={'Meeting'}/>
    <Accord title={'Closed'}/>
  </>
  )
}