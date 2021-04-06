import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/clientsContext'
import styles from '../styles/clients.module.scss'




function Clients () {
const [clients, _,  getData] = useContext(AppContext);
const [searchResults, setSearchResults] = useState(clients);

function searchClients (clients, word) {
  const names = clients.filter(client => client.Name && client.Name.trim().toLowerCase().includes(word.toLowerCase()));
  setSearchResults(names);
}

console.log(searchResults.sort((a, b) => a.Name > b.Name))
  


return (
  <div className={styles.component}>
    <div className={styles.search} >
        <input placeholder='Search Clients' onKeyUp={(e)=> {searchClients(clients, e.target.value)}}></input>
    </div>
    <div className={styles.clientSerch}>
      <h3>Total {searchResults.length} clients</h3>
      <div className={styles.clientsWrapper}>
        {searchResults.length > 0?
                searchResults.map(client => client.Name && <div className={styles.singleClient} id={client._id}>
                                          <h3>{client.Name}</h3>
                                          <p>City: {client.City}</p>
                                          <p>Ref: {client.Ref}</p>
                                        </div>):'no clients'}
      </div>
    </div>
  </div>
)
}

export default Clients;