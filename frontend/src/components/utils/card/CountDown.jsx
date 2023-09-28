import { useEffect, useMemo, useState } from "react";
import "./CountDown.scss";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );
    return () => clearInterval(interval);
  }, [parsedDeadline]);
  return (
    <div className="countdown">
      {time > 0 ? (
        <div className="items">
          {Object.entries({
            Days: time / DAY,
            Hours: (time / HOUR) % 24,
            Mins: (time / MINUTE) % 60,
            Seconds: (time / SECOND) % 60,
          }).map(([label, value]) => (
            <div key={label} className="item">
              <h1>{`${Math.floor(value)}`.padStart(2, "0")}</h1>
              <span>{label}</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ background: "#fff", color: "red" }}>
          This product is currently not on offer
        </p>
      )}
    </div>
  );
};

export default CountDown;
