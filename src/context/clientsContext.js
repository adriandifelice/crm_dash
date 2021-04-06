import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();


export const ClientContext = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch('http://localhost:3000/');
     if (!response.ok)  {
       const message = 'There was an error' + response.status;
       throw new Error(message)
      }
      const data = await response.json();
      setClients(data);
      return data;
    }

    return (
      <AppContext.Provider value={[clients, setClients,  getData] }>
      {props.children}
    </AppContext.Provider>
  )
}