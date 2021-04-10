import React, {useState, useContext, useEffect} from 'react';
import styles from '../styles/discover.module.scss';
import { AppContext } from '../context/prospectContext';
import ManualEntry from './manualEntryForm';


function Discover () {
  const [prospects, setProspects,  getProspects] = useContext(AppContext);
  const [prev, setPrev] = useState({});
  const [results, setResults] = useState([]);
  const [term, setTerm ] = useState('');
  const [erroralert, setErrorAlert ] = useState('');
  const [success, setSuccessAlert] = useState('');
  const url = 'http://localhost:3000/';



useEffect(() => {
  getYelpData();
}, []);

async function getYelpData () {
  if (!term) return;
  const settings = {
  method:'post',
  headers: {
    "Content-type": "application/json"
  },
    body: JSON.stringify({
    name: term})
}
if (prev.word && term === prev.word) { console.log('CACHED PAPI'); setPrev(prev); setResults(prev.results); return }

  const response = await fetch(url+'yelp', settings);
  if (!response.ok)  {
    const message = 'There was an error' + response.status;
    throw new Error(message)
   }
   const data = await response.json();
   if (data.length === 0) {setErrorAlert(true);
   setTimeout(function(){setErrorAlert(false)}, 1500);}

   let cachedData = {word:term,
    results:data
  }
   const newObj = Object.assign({}, cachedData )
   if (newObj.word !== ""){
    setPrev(newObj);
    setResults(data) ;
   }
   setTerm('');
}

async function handleClick(id, name, display_phone,phone, price, location, yelp_url, parsedUrl, email, salesRep, status) {
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
      restaurantUrl: 'no restaurant url',
      contactEmail: email || 'no email',
      salesRep:'Adrian',
      status:status || 'Not Contacted'
     })
  }
  
    const response = await fetch(url+'addProspect', settings);
    if (!response.ok)  {
      const message = 'There was an error' + response.status;
      throw new Error(message)
     }
     const data = await response.json();
     setProspects([...prospects, data]);
     setSuccessAlert(true);
     setTimeout(function(){setSuccessAlert(false)}, 1500);
}

  return (
      <div className={styles.wrapper}>
        <div className={styles.search} >
          <div>
            <input placeholder='Search keyword' value={term} onChange={(e)=> setTerm(e.target.value)}></input>
            {erroralert === true? <div className={styles.errorAlert}>No resource found</div>:null}
            {success === true? <div className={styles.successAlert}>Sucess</div>:null}
          </div>
          <div>
            <button onClick={()=> getYelpData()} >Search</button>
          </div>
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
                <button onClick={(id, name, display_phone,phone, price, location, yelp_url, parsedUrl, email, salesRep, status) => handleClick(result.id,result.name, result.display_phone, result.phone,result.price,result.location.address1, result.url, status)}>Add to prospects list</button>
              </div>):<ManualEntry />}
            </div>
        </div>
    
  )
}

export default Discover; 