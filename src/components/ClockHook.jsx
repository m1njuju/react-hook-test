import { useEffect, useState } from "react";

const ClockHook = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    // 1초 마다 시간 값을 다시 넣어줌
    setInterval(() => tick(), 1000);
  }, []);
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};
export default ClockHook;
