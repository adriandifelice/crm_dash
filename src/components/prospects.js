import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/prospectContext'
import styles from '../styles/prospect.module.scss'




function Prospects () {
const [prospects] = useContext(AppContext);
const [searchResults, setSearchResults] = useState(prospects);

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
console.log('before fetch');
const response = await fetch('http://localhost:3010/getLink', settings);
console.log('after fetch');
if (!response.ok)  {
    const message = 'There was an error' + response.status;
    throw new Error(message)
   }
   const data = await response.json();
   const restaurantUrl = `https://www.${data[0]}`
   console.log('URLLL', restaurantUrl);
 
}

async function handleClick(url){
      if(!url) console.log('no url')
      const link = await getLink(url);
      return link;
     
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
                                          <p>City: {client.displayPhone}</p>
                                          <p>Ref: {client.phone}</p>
                                          <p>{client.url}</p>
                                          <p>ID{client.yelp_id}</p>
                                          
                                          <button onClick={(url) => handleClick(client.url)}>Get link! </button>
                                        </div>):'no clients'}
      </div>
    </div>
  </div>
)
}

export default Prospects;