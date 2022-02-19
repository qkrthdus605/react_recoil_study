import { useRecoilState, useResetRecoilState } from 'recoil';
import { RedcountState, GreencountState, BluecountState } from '../atoms/count';

function Counter() {
  const [RedCount, setRedCount] = useRecoilState(RedcountState);
  const [GreenCount, setGreenCount] = useRecoilState(GreencountState);
  const [BlueCount, setBlueCount] = useRecoilState(BluecountState);
  const resetRedCounter = useResetRecoilState(RedcountState);
  const resetGreenCounter = useResetRecoilState(GreencountState);
  const resetBlueCounter = useResetRecoilState(BluecountState);

  return (
    <div>
      <p>r: {RedCount}</p>
      <button onClick={() => setRedCount(RedCount + 5)}>+</button>
      <button onClick={() => setRedCount(RedCount - 5)}>-</button>
      <br />
      <p>g: {GreenCount}</p>
      <button onClick={() => setGreenCount(GreenCount + 5)}>+</button>
      <button onClick={() => setGreenCount(GreenCount - 5)}>-</button>
      <br />
      <p>b: {BlueCount}</p>
      <button onClick={() => setBlueCount(BlueCount + 5)}>+</button>
      <button onClick={() => setBlueCount(BlueCount - 5)}>-</button>
      <br />
      <div style={{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: `rgb(${RedCount}, ${GreenCount}, ${BlueCount})`,
      }}></div>
      <br />
      <button onClick={() => {
        resetRedCounter();
        resetGreenCounter();
        resetBlueCounter();
      }}>reset</button>
    </div>
  );
};

export default Counter;