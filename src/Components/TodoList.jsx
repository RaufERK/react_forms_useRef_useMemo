// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },
import { useState, useEffect } from 'react';
import FormComp from './Form';
import UseRef from './UseRef';
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
  const [list, setList] = useState();
  const [inputValue, setInputValue] = useState('');

  const getTotos = async () => {
    const preResult = await fetch(apiUrl);
    const result = await preResult.json();
    setList(result.slice(0, 5));
  };

  useEffect(() => {
    getTotos();
  }, []);

  const changeHandler = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const submitHandler = () => {
    setList((pre) => [
      ...pre,
      { id: Math.random(), title: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  return (
    <div className="main">
      <h1>TodoList [данные тут]</h1>

      <FormComp setList={setList} />
      
      <UseRef setList={setList} />

      <ol>{list && list.map(({ id, title }) => <li key={id}>{title}</li>)}</ol>
      <input onChange={changeHandler} type="text" value={inputValue} />
      <button onClick={submitHandler}>ADD</button>
      {inputValue}
    </div>
  );
};

export default TodoList;
