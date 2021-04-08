import styles from '../styles/maindash.module.scss'
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Form from './formiktest';

export default function Dashboard () {
  const [prospects, _,  __, deleteProspect, updateStatus] = useContext(AppContext);

  
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
          <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Typography >Not Contacted {prospects.filter(prospect => prospect.status === 'Not Contacted').length }</Typography>
            </AccordionSummary>
            <AccordionDetails>
                  <Typography>
                      {prospects.length > 0?
                      prospects.map(client => client.status === 'Not Contacted' && 
                            <div className={styles.singleClient} id={client._id}>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography >{client.businessName} </Typography>
                                </AccordionSummary>
                             <AccordionDetails>
                                <Typography>
                                  <p>Phone: {client.displayPhone}</p>
                                  <p>Phone 2: {client.phone}</p>
                                  {/* <p>Url: {client.restaurantUrl}</p> */}
                                  <p>Email: {client.contactEmail}</p>
                                  <Form id={client._id} fn={updateStatus}/>
                                  <p>Status: {client.status}</p>  
                               </Typography>
                          </AccordionDetails>
                     </Accordion>
                             </div> ):'no clients'}
                  </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
        <div className={styles.column}>
         <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography >Contacted   {prospects.filter(prospect => prospect.status === 'Contacted').length} </Typography>
            </AccordionSummary>
            <AccordionDetails>
                  <Typography>
                    {prospects.length > 0?
                        prospects.map(client => client.status === 'Contacted' && 
                                          <div className={styles.singleClient} id={client._id}>
                                <Accordion>
                                <AccordionSummary>
                                    <Typography > {client.businessName}</Typography> 
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                      <p>Phone: {client.displayPhone}</p>
                                      <p>Phone 2: {client.phone}</p>
                                      <p>Url: {client.restaurantUrl}</p>
                                      <p>Email: {client.contactEmail}</p>
                                      <Form id={client._id} fn={updateStatus}/>
                                      <p>Status: {client.status}</p>  
                                  </Typography>
                                </AccordionDetails>
                        </Accordion>
                                </div> ):'no clients'}
                  </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
        <div className={styles.column}>
         <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography >Responded  {prospects.filter(prospect => prospect.status === 'Responded').length}</Typography>
            </AccordionSummary>
        <AccordionDetails>
                <Typography>
                {prospects.length > 0?
                prospects.map(client => client.status === 'Respondido' && 
                            <div className={styles.singleClient} id={client._id}>
                            <Accordion>
                            <AccordionSummary>
                                <Typography >{client.businessName}</Typography>
                             </AccordionSummary>
                             <AccordionDetails>
                                <Typography>
                                  <p>Phone: {client.displayPhone}</p>
                                  <p>Phone 2: {client.phone}</p>
                                  <p>Url: {client.restaurantUrl}</p>
                                  <p>Email: {client.contactEmail}</p>
                                  <p>Status: {client.status}</p>  
                                  <Form id={client._id} fn={updateStatus}/>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
        <div className={styles.column}>
           <Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Meeting {prospects.filter(prospect => prospect.status === 'Meeting').length}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.status === 'Meeting' && 
                            <div className={styles.singleClient} id={client._id}>
                            <Accordion>
                            <AccordionSummary>
                                <Typography >{client.businessName}</Typography>
                             </AccordionSummary>
                             <AccordionDetails>
                                <Typography>
                                  <p>Phone: {client.displayPhone}</p>
                                  <p>Phone 2: {client.phone}</p>
                                  <p>Url: {client.restaurantUrl}</p>
                                  <p>Email: {client.contactEmail}</p>
                                  <p>Status: {client.status}</p>  
                                  <Form id={client._id} fn={updateStatus}status={client.status}/>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
</Accordion>
        </div>
        <div className={styles.column}>
         <Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Closed {prospects.filter(prospect => prospect.status === 'Closed').length}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.status === 'Closed' && 
                            <div className={styles.singleClient} id={client._id}>
                            <Accordion>
                            <AccordionSummary>
                                <Typography >{client.businessName}  </Typography>
                             </AccordionSummary>
                             <AccordionDetails>
                                <Typography>
                                  <p>Phone: {client.displayPhone}</p>
                                  <p>Phone 2: {client.phone}</p>
                                  <p>Url: {client.restaurantUrl}</p> 
                                  <p>Email: {client.contactEmail}</p>
                                  <p>Status: {client.status}</p> 
                                  <Form id={client._id} fn={updateStatus} status={client.status}/> 
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  {/* <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button> */}
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
</Accordion>
        </div>
    </div>
  )
}