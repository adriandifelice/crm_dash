import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import styles from '../styles/prospect.module.scss'




function Prospects () {
const [prospects] = useContext(AppContext);
const [searchResults, setSearchResults] = useState(prospects);

function searchProspects (prosps, word) {
  const names = prosps.filter(client => client.Name && client.Name.trim().toLowerCase().includes(word.toLowerCase()));
  setSearchResults(names);
}

useEffect(() => {
  console.log('prospects', prospects);
}, []);

return (
  <div className={styles.component}>
    <input placeholder='Search Prospeccts' onKeyUp={(e)=> {searchProspects(prospects, e.target.value)}}></input>
    <div className={styles.clientSerch}>
      <h3>Total {searchResults.length} prospects</h3>
      <div className={styles.clientsWrapper}>
        {searchResults.length > 0?
                searchResults.map(client => client.businessName && <div className={styles.singleClient} id={client._id}>
                                          <h3>{client.businessName}</h3>
                                          <p>City: {client.City}</p>
                                          <p>Ref: {client.Ref}</p>
                                        </div>):'no clients'}
      </div>
    </div>
  </div>
)
}

export default Prospects;