import { useState, useMemo } from 'react';

const UseMemo = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);

  const style = {
    backgroundColor: darkTheme ? 'lightblue' : 'white',
  };

  const heavyCalculations = () => {
    const someCalculations =
      Math.random() + Math.random() + Math.random() + Math.random();
    console.log(someCalculations);
    return counter1 + counter2 + someCalculations;
  };

  const myValue = useMemo(() => heavyCalculations(), [counter1, counter2]);

  return (
    <div className="main" style={style}>
      <h3>Use Memo</h3>
      <h3>{myValue}</h3>
      <h2>counter2 :: {counter2}</h2>
      <button onClick={() => setDarkTheme((pre) => !pre)}>TOGGLE THEME</button>
      <button onClick={() => setCounter1((pre) => pre + 1)}>counter 1</button>
      <button onClick={() => setCounter2((pre) => pre + 1)}>counter 2</button>
    </div>
  );
};

export default UseMemo;
