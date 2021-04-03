import React, { useContext } from 'react';
import { AppContext } from '../context/clientsContext'
import styles from '../styles/clients.module.scss'




function Clients () {
const [clients, setClients,  getData] = useContext(AppContext);

return (
  <div className={styles.clientsWrapper}>
    {clients.length > 0?
             clients.map(client => <div className={styles.singleClient} id={client._id}>
                                      <h3>Name: {client.Name}</h3>
                                      <p>City: {client.City}</p>
                                      <p>Ref: {client.Ref}</p>
                                    </div>):'no clients'}
  </div>
)
}

export default Clients;