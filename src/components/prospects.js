import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import styles from '../styles/prospect.module.scss'




function Prospects () {
  const [prospects, setProspects,  getProspects, deleteProspect] = useContext(AppContext);
  const [searchResults, setSearchResults] = useState(prospects);
  
  useEffect(() => { 
      setSearchResults(prospects);
  }, [prospects]); 

  function searchProspects (prosps, word) {
    const names = prosps.filter(client => client.businessName && client.businessName.trim().toLowerCase().includes(word.toLowerCase()));
    setSearchResults(names);
  }

  async function getLink (url) {
    const settings = {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({
      url:url})
  }
const response = await fetch('http://localhost:3010/getLink', settings);

if (!response.ok)  {
    const message = 'There was an error' + response.status;
    throw new Error(message)
   }
const data = await response.json();
const restaurantUrl = `https://www.${data[0]}`
return restaurantUrl;
}

async function handleClick(url){
      if(!url) alert('there is no url to yelp')
      const link = await getLink(url);
      return link;
}



return (
  <div className={styles.component}>
    <input placeholder='Search Prospeccts' onKeyUp={(e)=> {searchProspects(prospects, e.target.value)}}></input>
    <div className={styles.clientSerch}>
      <h3>Total {searchResults.length} prospects</h3>
      <div className={styles.clientsWrapper}>
        {searchResults.length > 0?
                searchResults.map(client => client.businessName && <div className={styles.singleClient} id={client._id}>
                                          <h3>{client.businessName}</h3>
                                          <p>Phone: {client.displayPhone}</p>
                                          <p>Phone 2: {client.phone}</p>
                                          <p>Url: {client.restaurantUrl}</p>
                                          <p>Email: {client.contactEmail}</p>
                                          <button><a href={client.url}>See in yelp</a></button>
                                          <button onClick={(url) => handleClick(client.url)}> Save link! </button>
                                          <button onClick={(id) => deleteProspect(client._id)}> Delete Prospect! </button>
                                          <button onClick={(id) => deleteProspect(client._id)}> View Menu! </button>
                                        </div>):'no clients'}
      </div>
    </div>
  </div>
)
}

export default Prospects;