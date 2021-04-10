import React, {useState, useContext, } from 'react';
import styles from '../styles/manualentry.module.scss'
import { AppContext } from '../context/prospectContext';


export default function ManualEntry () {
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
  const [salesrep, setSalesrep] = useState('');
  const [status, setStatus] = useState('');
  const [otherPhone, setOtherPhone ] = useState('');
  const [erroralert, setErrorAlert ] = useState('');
  const [success, setSuccessAlert] = useState('');
  const url = 'http://localhost:3000/';
  
  async function addManualClient(id, nom, phone1,phone2, prx, loc, y_url, parsedUrl, emeil, salesR, Status) {
    if(name.length === 0 || name === 'undefined') {setErrorAlert(true);
      setTimeout(function(){setErrorAlert(false)}, 1500);}
    const settings = {
      method:'post',
      headers: {
        "Content-type": "application/json"
      },
        body: JSON.stringify({
        yelp_id:id|| '',  
        businessName:name || '',
        displayPhone:phone || '',
        phone:phone || '',
        price:price|| '',
        address:address || '',
        url:url1 || '',
        restaurantUrl: restaurantUrl || '',
        contactEmail: email || 'no email',
        salesRep:'Adrian' || '',
        status:'Not Contacted'
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
       setPhone('');
       setPrice('');
       setLocation('');
       setEmail('');
       setAddress('');
       setSuccessAlert(true);
       setTimeout(function(){setSuccessAlert(false)}, 1500);
  }

    return (
      <div className={styles.wrapper}>
          <input required placeholder='Name' onChange={(e)=> setName(e.target.value)}></input>
          <input placeholder='Phone' onChange={(e)=> setPhone(e.target.value)}></input>
          <input placeholder='Other Phone'  onChange={(e)=> setPhone(e.target.value)}></input>
          <input placeholder='Email'  onChange={(e)=> setEmail(e.target.value)}></input>
          <input placeholder='Price'  onChange={(e)=> setPrice(e.target.value)}></input>
          <input placeholder='address'  onChange={(e)=> setLocation(e.target.value)}></input>
          <input placeholder='url'  onChange={(e)=> setUrl(e.target.value)}></input>
          <input placeholder='status' onChange={(e)=> setStatus(e.target.value)}></input>
          <input placeholder='id'  onChange={(e)=> setId(e.target.value)}></input>
          <input placeholder='salesRep'  onChange={(e)=> setSalesrep(e.target.value)}></input>
          <input placeholder='restaurantUrl'  onChange={(e)=> setRestaurantUrl(e.target.value)}></input>
          <input placeholder='otherPhone'  onChange={(e)=> setOtherPhone(e.target.value)} ></input>
          <button type='submit' className={styles.manualButton} onClick={(id, nom, phone1,phone2, prx, loc, y_url, parsedUrl, emeil, salesR, Status) => addManualClient(name,phone, phone, price ,address, url1, restaurantUrl, status, id, salesrep, email)}>Add to prospects list</button>
          {erroralert === true? <div className={styles.errorAlert}>No resource found</div>:null}
          {success === true? <div className={styles.successAlert}>Sucess</div>:null}
      </div>
    )
  }


  // Formik for manual entry