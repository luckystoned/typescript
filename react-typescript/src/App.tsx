import { useEffect, useState } from 'react';
import List from './components/List';
import Form from './components/Form';

import { Sub } from './types';

import './App.css';

interface AppState {
  subs: Array<Sub>,
}

const INITIAL_STATE = [
  {
    nick: "lucas",
    subsMonths: 3,
    avatar: "https://avatars2.githubusercontent.com/u/100928?v=4",
    description: "lucas is a frontend developer"
  },
  {
    nick: "lucky",
    subsMonths: 1,
    avatar: "https://avatars2.githubusercontent.com/u/527123?&v=4"
  }
]

function App() {
  
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  
  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="App">
      <h1>Luckys Subs!</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
