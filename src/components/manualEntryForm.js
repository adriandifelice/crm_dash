import React, {useState, useContext, } from 'react';
import styles from '../styles/manualentry.module.scss'
import { AppContext } from '../context/prospectContext';


export default function ManualEntry ({clientes}) {
  const [prospects, setProspects,  getProspects] = useContext(AppContext);
  const [name, setName] = useState('');
  const [display_phone, setDisplayPhone] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  const [url1, setUrl] = useState('');
  const [restaurantUrl, setRestaurantUrl] = useState('');
  const [salesrep, setSalesrep] = useState('Adrian');
  const [status, setStatus] = useState('Not Contacted');
  const [otherPhone, setOtherPhone ] = useState('');
  const [erroralert, setErrorAlert ] = useState('');
  const [success, setSuccessAlert] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactTitle, setContactTitle] = useState('');
  const [category, setCategory] = useState('');
  const clients = clientes;
  const url = 'http://localhost:3000/';
  
  async function addManualClient(id, nom, phone1,phone2, prx, loc, y_url, parsedUrl, emeil, salesR, Status, cat) {
    if(name.length === 0 || name === 'undefined') {setErrorAlert(true);
      setTimeout(function(){setErrorAlert(false)}, 1500);}

      const isClient = clients.some(client => client.Name.trim().toLowerCase() === name.trim().toLowerCase());
      if(isClient) {alert('already in clients'); return;}
  
        const settings = {
          method:'post',
          headers: {
            "Content-type": "application/json"
          },
            body: JSON.stringify({
            yelp_id:id|| '',  
            businessName:name || '',
            contactName:contactName || '',
            contactTitle:contactTitle || '',
            displayPhone:phone || '',
            phone:phone || '',
            price:price|| '',
            address:address || '',
            url:url1 || '',
            restaurantUrl: restaurantUrl || '',
            contactEmail: email || 'no email',
            salesRep:'Adrian' || '',
            status:'Not Contacted',
            category:category
           })
          }
          const response = await fetch(url+'addProspect', settings);
          if (!response.ok)  {
            setErrorAlert(true);
            setTimeout(function(){setErrorAlert(false)}, 1500);
            return;
           }
           const data = await response.json();
           if (data.mess) {setErrorAlert(true);
                setTimeout(function(){setErrorAlert(false)}, 1500);
                return;}
    
           setProspects([...prospects, data]);
           setName('');
           setDisplayPhone('');
           setContactName('');
           setContactTitle('');
           setPhone('');
           setPrice('');
           setLocation('');
           setEmail('');
           setAddress('');
           setRestaurantUrl('');
           setSuccessAlert(true);
           setTimeout(function(){setSuccessAlert(false)}, 1500);
           setCategory('');
  }

    return (
      <div className={styles.wrapper}>
          <input required placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}></input>
          <input placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
          <input placeholder='Other Phone' value={otherPhone} onChange={(e)=> setPhone(e.target.value)}></input>
          <input placeholder='Contact Name' value={contactName} onChange={(e)=> setContactName(e.target.value)}></input>
          <input placeholder='Contact Title' value={contactTitle} onChange={(e)=> setContactTitle(e.target.value)}></input>
          <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          <input placeholder='Price' value={price} onChange={(e)=> setPrice(e.target.value)}></input>
          <input placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)}></input>
          <input placeholder='Url' value={url1} onChange={(e)=> setUrl(e.target.value)}></input>
          <input placeholder='Status'value={status} onChange={(e)=> setStatus(e.target.value)}></input>
          <input placeholder='Id' value={id} onChange={(e)=> setId(e.target.value)}></input>
          <input placeholder='Sales Rep' value={salesrep} onChange={(e)=> setSalesrep(e.target.value)}></input>
          <input placeholder='Restaurant Url' value={restaurantUrl} onChange={(e)=> setRestaurantUrl(e.target.value)}></input>
          <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choose Category</option>
              <option value="restaurant">restaurant</option>
              <option value="hotel">hotel</option>
              <option value="store/supermarket">store/supermarket</option>
              <option value="other">other</option>
          </select>
          <button type='submit' className={styles.manualButton} onClick={(id, nom, phone1,phone2, prx, loc, y_url, parsedUrl, emeil, salesR, Status, cat) => addManualClient(name,phone, phone, price ,address, url1, restaurantUrl, status, id, salesrep, email, category)}>Add to prospects list</button>
          {erroralert === true? <div className={styles.errorAlert}>No resource found</div>:null}
          {success === true? <div className={styles.successAlert}>Sucess</div>:null}
      </div>
    )
  }
