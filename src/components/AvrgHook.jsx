import { useCallback, useMemo, useState } from "react";

const AvrgHook = () => {
  const [num, setNum] = useState([]);
  const [inputnum, setInputnum] = useState(0);

  const onChange = useCallback((e) => {
    setInputnum(e.target.value);
  }, []);

  const addNum = useCallback(() => {
    setNum([...num, parseInt(inputnum)]);
    setInputnum(0);
  }, [inputnum, num]);

  const avrNum = (list) => {
    //let sum = list.reduce((a, b) => a + b);
    //let avg = sum / list.length;
    //return avg;
    if (list.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let n of list) {
      sum += n;
    }
    return sum / list.length;
  };
  // 두 번째 인자 []는 어떤 값이 바뀔 때(업데이트 될 때)만 실행할 것인지
  const avr = useMemo(() => avrNum(num), [num]);

  return (
    <div>
      <input type="number" onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>
      <h3>모든 수의 평균: {avr}</h3>
      <ul>
        {num.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};
export default AvrgHook;
