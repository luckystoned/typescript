import { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';

interface Sub {
  nick: string,
  subsMonths: number,
  avatar: string,
  description?: string
}

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
  
  const [subs, setsubs] = useState<AppState["subs"]>([]);
  
  useEffect(() => {
    setsubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Luckys Subs!</h1>
      <List subs={subs} />
    </div>
  );
}

export default App;
