import { useEffect, useState, useRef } from 'react';
import List from './components/List';
import Form from './components/Form';

import { Sub, SubsResponseFromApi } from './types';

import './App.css';

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App() {
  
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Typed fetch to get subs from API
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch('https://mocki.io/v1/15756bc0-6248-4e68-8c18-2586012da502')
        .then(res => res.json())
    }
    // Adding desired shape to the response
    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const { nick, subsMonths, avatar, description } = subFromApi;

        return {
          nick,
          subsMonths,
          avatar,
          description
        }
      })
    }

    fetchSubs()
      //Funcional Programming
      .then(mapFromApiToSubs)
      .then(setSubs)
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub]);
    setNewSubsNumber(n => n + 1);
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Luckys Subs!</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
