import { useCallback, useMemo, useState } from "react";

const AvrgHook = () => {
  const [inputnum, setInputnum] = useState(0);
  const [number, setNumber] = useState([70, 90]);

  const onChange = useCallback((e) => {
    setInputnum(e.target.value);
  }, []);

  const addNum = useCallback(() => {
    setNumber([...number, parseInt(inputnum)]);
    setInputnum(0);
  }, [inputnum, number]);

  const allAvrg = (list) => {
    let sum = list.reduce((a, b) => a + b);
    let avg = sum / list.length;
    return avg;
  };

  const avrg = useMemo(() => allAvrg(number), [number]);

  return (
    <div>
      <input type="number" onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>
      <h3>모든 수의 평균: {avrg}</h3>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};
export default AvrgHook;
