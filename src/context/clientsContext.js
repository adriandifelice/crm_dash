import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();


export const ClientContext = (props) => {
  const [clients, setClients] = useState([]);

  async function getData() {
    const response = await fetch('http://localhost:3000/');
     if (!response.ok)  {
       const message = 'There was an error' + response.status;
       throw new Error(message)
      }
  
      const data = await response.json();
      console.log(data)
      setClients(data);
      return data;
    }
    
    useEffect(() => {
      getData();
      console.log('clients', clients)
    }, []);

    return (
      <AppContext.Provider value={[clients, setClients,  getData] }>
      {props.children}
    </AppContext.Provider>
  )
}