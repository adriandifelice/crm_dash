import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();


export const ProspectContext = (props) => {
  const [prospects, setProspects] = useState([]);
 
 
  useEffect(() => {
       getProspects();
  }, [setProspects]);

  async function getProspects() {
    const response = await fetch('http://localhost:3000/getProspects');
     if (!response.ok)  {
       const message = 'There was an error' + response.status;
       throw new Error(message)
      }
  
      const data = await response.json();
      setProspects(data);
      return data;
    }

    async function deleteProspect(id){
      const settings = {
        method:'post',
        headers: {
          "Content-type": "application/json"
        },
          body: JSON.stringify({
          id:id})
        }
        const response = await fetch('http://localhost:3000/deleteProspect', settings);
      
      if (!response.ok)  {
          const message = 'There was an error' + response.status;
          throw new Error(message)
         }
         const data = await response.text();
         setProspects(prospects.filter(prospect => prospect._id !== data));
      }
      
  

    return (
      <AppContext.Provider value={[prospects, setProspects,  getProspects, deleteProspect] }>
      {props.children}
    </AppContext.Provider>
  )
} 