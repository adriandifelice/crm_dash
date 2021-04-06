// import React, {useState, createContext, useEffect} from 'react';

// export const DiscoveryContext = createContext();


// export default function DiscoverContext (props) {
//   const [prev, setPrev] = useState({});
//   const [results, setResults] = useState([]);
//   const [term, setTerm ] = useState('');
//   const url = 'http://localhost:3000/';
 

//   useEffect(() => {
//     console.log('on mount', prev);
//     getYelpData();
//     console.log('after mount', prev)
//   }, []);

//   async function getYelpData () {
//     const settings = {
//     method:'post',
//     headers: {
//       "Content-type": "application/json"
//     },
//       body: JSON.stringify({
//       name: term})
//   }
//   console.log('PREVIOUS OBJECT THAT WILL BE SET IF EXISTS', prev.results)
//   if (prev.word && term === prev.word) { console.log('CACHED PAPI'); setPrev(prev); setResults(prev.results); return }
  
//     const response = await fetch(url+'yelp', settings);
//     if (!response.ok)  {
//       const message = 'There was an error' + response.status;
//       throw new Error(message)
//      }
//      const data = await response.json();
//      let cachedData = {word:term,
//       results:data
//     }
//      console.log('DATA', data);
//      const newObj = Object.assign({}, cachedData )
//      console.log('newObj', newObj)
//      if (newObj.word !== ""){
//       setPrev(newObj);
//       setResults(data) ;
//      }
   
//     //  setTerm('');
//   }
   


//     return (
//       <DiscoveryContext.Provider value={[prev, setPrev, results, setResults, term, setTerm, getYelpData]} >
//         {props.children}
//     </DiscoveryContext.Provider>
//   )
// }