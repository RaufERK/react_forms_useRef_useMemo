import { useState } from 'react';

const FormComp = ({ setList }) => {
  const [title, setTitle] = useState('');

  const changeHandler = ({ target }) => setTitle(target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    setList((pre) => [...pre, { title, id: Math.random(), completed: false }]);
    setTitle('');
  };

  return (
    <div className="main">
      <h4>form with enter {title}</h4>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} type="text" value={title} />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default FormComp;
