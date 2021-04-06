import React, {useState, useContext, } from 'react';
import styles from '../styles/strategy.module.scss'
import { AppContext } from '../context/prospectContext';

export default function ManualEntry () {
const [prospects, setProspects,  getProspects] = useContext(AppContext);
const [name, setName] = useState('');
const [display_phone, setDisplayPhone] = useState('');
const [phone, setPhone] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');
const [email, setEmail] = useState('');
const url = 'http://localhost:3000/';

async function addManualClient(nombre, tlf, prix, loc, mail) {
  const settings = {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({
      businessName:name,
      displayPhone:display_phone || 'no phone',
      phone:phone || 'no phone',
      price:price || 'no pricee',
      address:location || 'no location',
      restaurantUrl: 'no restaurant url',
      contactEmail: email || 'no email',
      salesRep:'Adrian'
     })
  }
  
    const response = await fetch(url+'addProspect', settings);
    if (!response.ok)  {
      const message = 'There was an error' + response.status;
      throw new Error(message)
     }
     const data = await response.json();
     setProspects([...prospects, data]);
     setName('');
     setPhone('');
     setPrice('');
     setLocation('');
     setEmail('');
     setName('');
     console.log('shbClean')
}


  return (
    <div className={styles.wrapper}>
        <input placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}></input>
        <input placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
        <input placeholder='Price' value={price} onChange={(e)=> setPrice(e.target.value)}></input>
        <input placeholder='Location' value={location} onChange={(e)=> setLocation(e.target.value)}></input>
        <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

        <button onClick={(nombre, tlf, prix, loc, mail) => addManualClient(name, display_phone, price, location, email)} > Click me</button>
    </div>
  )
}