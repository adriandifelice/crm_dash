import React, {useState} from 'react';
import styles from '../styles/discover.module.scss'


function Discover () {
  const [results, setResults] = useState([]);
  const [term, setTerm ] = useState('');
  const url = 'http://localhost:3000/'
  


async function getYelpData () {
  const settings = {
  method:'post',
  headers: {
    "Content-type": "application/json"
  },
    body: JSON.stringify({
    name: term})
}

  const response = await fetch(url+'yelp', settings);
  if (!response.ok)  {
    const message = 'There was an error' + response.status;
    throw new Error(message)
   }
   const data = await response.json();
   console.log(data);
   setResults(data) ;
   setTerm('');
}

async function handleClick(id, name, display_phone,phone, price, location, yelp_url, email, salesRep) {
  const settings = {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({
      yelp_id:id,  
      businessName:name,
      displayPhone:display_phone,
      phone:phone,
      price:price,
      address:location,
      url:yelp_url,
      contactEmail:email || 'no email',
      salesRep:'Adrian'
     })
  }
  
    const response = await fetch(url+'addProspect', settings);
    if (!response.ok)  {
      const message = 'There was an error' + response.status;
      throw new Error(message)
     }
     const data = await response.json();
     console.log(data);
}

  return (
    <div >
        <div className={styles.wrapper}>
          <input placeholder='Search keyword' value={term} onChange={(e)=> setTerm(e.target.value)}></input>
          <button onClick={()=> getYelpData()} > Click me</button>
        </div>
        <div className={styles.resultWrapper}> 
        {results.length > 0? results.map(result => 
          <div className={styles.result} id={result.id}>
              {/* <img alt='store' src={result.image_url}></img>  */}
              <div>{result.name}</div> 
              <div className={styles.categories}>{result.categories.map(cat => <div>|{cat.title}|</div>)}</div>
              <div>{result.display_phone}</div>
              <div>{result.phone}</div>
              {result.email?<div>{result.email}</div>:'no mail'}
              <div>{result.price}</div>
              <div>{result.location.address1}</div>
              <a href={result.url}>click</a>
              <button onClick={(id, name, display_phone,phone, price, location, yelp_url) => handleClick(result.id,result.name, result.display_phone, result.phone,result.price,result.location.address1, result.url)}>Add to prospects list</button>
            </div>):'nothing yet'}
          </div>
    </div>
  )
}

export default Discover; 