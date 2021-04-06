import { useRef } from 'react';
import { nanoid } from 'nanoid/async';
import RaitControl from './RaitControl';

const UseRef = ({ setList }) => {
  const inputValue = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log(inputValue.current);
    console.log(inputValue.current.name.value);
    console.log(inputValue.current.password.value);
    const title = inputValue.current.name.value;
    const id = await nanoid();
    console.log(' id =>', id);
    setList((pre) => [...pre, { id, title, completed: false }]);
    inputValue.current.name.value = '';
  };

  return (
    <div className="main">
      <h3>Use Ref Example</h3>
      <form onSubmit={submitHandler} ref={inputValue}>
        <input type="text" name="name" />
        <input type="text" name="password" />
        <button onClick={submitHandler}>ADD with useRef</button>
      </form>
      <RaitControl />
    </div>
  );
};

export default UseRef;
