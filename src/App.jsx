import './App.css';
import TodoList from './Components/TodoList';
import { useState, createContext } from 'react';
import UseMemo from './Components/UseMemo';

export const RaitingContext = createContext(null);
export const CurrencyContext = createContext(null);

function App() {
  const [rait, setRait] = useState(78);
  return (
    <div className="main">
      <UseMemo />
      <h3>APP : rait : {rait}</h3>

      <RaitingContext.Provider
        value={{ rait, setRait, moreData: { data: 'text' } }}
      >
        <TodoList />
      </RaitingContext.Provider>
    </div>
  );
}

export default App;
