import styles from '../styles/maindash.module.scss'
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


export default function Dashboard () {
  const [prospects, setProspects,  getProspects, deleteProspect] = useContext(AppContext);
  // const [noContacted, setNotContacted] = useState([]);
  // const [contactado, setContacted] = useState([]);
  // const [respondido, setResponded] = useState([]);

  // useEffect(() => {
  //   console.log('prospects', prospects);
  //   notContacted();
  //   contacted();
  //   responded();
  //   console.log('notContacted.length ueef', notContacted);
  // }, []);
 
  // function notContacted() {
  //  const result = prospects.filter(prospect => prospect.status === 'Not Contacted');
  //  console.log(result);
  //  setNotContacted(result) ;
  // }

  // function contacted() {
  //   const result = prospects.filter(prospect => prospect.status === 'Contacted');
  //   setContacted(result);
  // }

  // function responded () {
  //   const result = prospects.filter(prospect => prospect.status === 'Responded');
  //   setResponded(result);
  // }

  
  return (
    <div className={styles.wrapper}>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Not Contacted {prospects.filter(prospect => prospect.status === 'Not Contacted').length }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.status === 'Not Contacted' && 
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
                                  <button><a href={client.url}>See in yelp</a></button>
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Contacted  {prospects.filter(prospect => prospect.status === 'Contacted').length || 'loading'} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.status === 'Contacted' && 
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
                                  <button><a href={client.url}>See in yelp</a></button>
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Responded  {prospects.filter(prospect => prospect.status === 'Respondido').length || 'loading'}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.status === 'Respindido' && 
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
                                  <button><a href={client.url}>See in yelp</a></button>
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
</Accordion>
<Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Meeting</Typography>
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
                                  <button><a href={client.url}>See in yelp</a></button>
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
</Accordion>
<Accordion>
        <AccordionSummary aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Closed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {prospects.length > 0?
           prospects.map(client => client.businessName && 
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
                                  <button><a href={client.url}>See in yelp</a></button>
                                  {/* <button onClick={(url) => handleClick(client.url)}> Save link! </button> */}
                                  <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                  <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                               </Typography>
                             </AccordionDetails>
                    </Accordion>
                             </div> ):'no clients'}
          </Typography>
        </AccordionDetails>
</Accordion>
      
</div>


  )
}