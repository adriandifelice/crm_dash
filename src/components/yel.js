import React from 'react';

function Discover () {
  const url = 'http://localhost:3000/yelp'
  const term = 'breakfast';
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
   const data = await response.text();
   console.log(data)
   
   return data;
}

  return (
    <>
    <h1>Discover</h1>
    <input></input>
    <button onClick={()=>getYelpData()} > Click mee</button>
</>
  )
}

export default Discover;