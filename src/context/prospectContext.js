import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();


export const ProspectContext = (props) => {
  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    getProspects();
    console.log('something changed')
  }, [setProspects]);

  async function getProspects() {
    const response = await fetch('http://localhost:3000/getProspects');
     if (!response.ok)  {
       const message = 'There was an error' + response.status;
       throw new Error(message)
      }
  
      const data = await response.json();
      console.log('Here too',data)
      setProspects(data);
      return data;
    }
  

    return (
      <AppContext.Provider value={[prospects, setProspects,  getProspects] }>
      {props.children}
    </AppContext.Provider>
  )
}