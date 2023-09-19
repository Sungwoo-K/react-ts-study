import { useEffect, useState } from "react";
import Alert from "./Alert";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleAlertClosed = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (count !== 0) {
      setShowAlert(true);
    }
  }, [count]);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
      {showAlert && (
        <Alert message="증가되었습니다." onClose={handleAlertClosed} />
      )}
    </div>
  );
};

export default Counter;
