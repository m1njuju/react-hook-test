import { useEffect, useState } from "react";

const ClockHook = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(() => tick(), 1000);
  });
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};
export default ClockHook;
