import React, {useState} from 'react';
import styles from '../styles/discover.module.scss'


function Discover () {
  const [results, setResults] = useState([]);
  const [term, setTerm ] = useState('');
  const url = 'http://localhost:3000/yelp'
  


async function getYelpData () {
  const settings = {
  method:'post',
  headers: {
    "Content-type": "application/json"
  },
    body: JSON.stringify({
    name: term})
}

  const response = await fetch(url, settings);
  if (!response.ok)  {
    const message = 'There was an error' + response.status;
    throw new Error(message)
   }
   const data = await response.json();
   console.log(data);
   setResults(data) ;
}

  return (
    <div >
        <div className={styles.wrapper}>
          <input placeholder='enter keyword' onKeyUp={(e)=> setTerm(e.target.value)}></input>
          <button onClick={()=> getYelpData()} > Click me</button>
        </div>
        {results.length > 0? results.map(result => 
          <>
            <div>{result.name}</div> 
            <div>{result.categories.map(cat => <div>{cat.title}</div>)}</div>
            <div>{result.display_phone}</div>
            <div>{result.phone}</div>
            <div>{result.price}</div>
            <div>{result.location.address1}</div>
            <a href={result.url}>click</a>
          </>):'nothing yet'}
    </div>
  )
}

export default Discover; 