import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Form from './formiktest';
import styles from '../styles/maindash.module.scss'
import React, { useContext } from 'react';
import { AppContext } from '../context/prospectContext'

function Accord ({title}) {
  const [prospects, _,  __, ___, updateStatus] = useContext(AppContext);
  
  return (
      <div className={styles.column}>
          <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Typography > {title} {prospects.filter(prospect => prospect.status === title).length }</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.inside}>
                  <Typography>
                      {prospects.length > 0?
                      prospects.map(client => client.status === title && 
                      <div className={styles.singleClient} id={client._id}>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography >{client.businessName} </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                      <Form id={client._id} fn={updateStatus}/>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> </div> ):'no clients'}
                  </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
)}

  export default Accord;


  // on click, at the end of the function 
  //    setAlert = true; displays a div, then in 2 seconds sets to false