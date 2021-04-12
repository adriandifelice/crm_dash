import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/clientsContext'
import styles from '../styles/clients.module.scss'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';




function Clients () {
const [clients, _,  getData] = useContext(AppContext);
const [searchResults, setSearchResults] = useState(clients);

function searchClients (clients, word) {
  if(word === ' ') return clients;
  const names = clients.filter(client => client.Name && client.Name.trim().toLowerCase().includes(word.toLowerCase()));
  setSearchResults(names);
}  
return (
  <div className={styles.component}>
    <div className={styles.search} >
        <input className={styles.input} placeholder='Search Clients' onKeyUp={(e)=> {searchClients(clients, e.target.value)}}></input>
    </div>
    <div className={styles.clientSearch}>
      <h3>Total {searchResults.length} clients</h3>
      <div className={styles.clientsWrapper}>
      <div className={styles.test}>
        {searchResults.length > 0?
                searchResults.map(client => client.Name && 
                                <div className={styles.singleClient} id={client._id}>
                                    <Accordion>
                                        <AccordionSummary>
                                          <div className={styles.flex}>
                                              <div className={styles.test}>
                                                  <Typography >{client.Name}</Typography>
                                              </div>
                                          </div> 
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                              <p>City: {client.City}</p>
                                              <p>Phone 2: {client.Ref}</p>                            
                                          </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div> ):'no clients'}
                                </div>
        
      </div>
    </div>
  </div>
)
}



export default Clients;