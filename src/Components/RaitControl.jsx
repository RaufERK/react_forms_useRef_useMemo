import { useContext } from 'react';

import { RaitingContext } from '../App';

const RaitControl = () => {
  const { rait, setRait } = useContext(RaitingContext);
  return (
    <div className='main'>
      <h5>RaitControl</h5>
      <h1>{rait}</h1>
      <button onClick={() => setRait((pre) => pre + 1)}>INC RAIT</button>
    </div>
  );
};

export default RaitControl;
