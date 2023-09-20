import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";

const Timer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // Initialize with 1 hour in seconds

  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsOpen(true);
      return;
    }

    // Decrease time remaining every second
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up interval on unmount or when time is up
    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return (
    <>
      <p
        style={{ color: "orange", fontSize: "12px", justifyContent: "center" }}
      >
        누적 보상까지
      </p>
      <span style={{ color: "orange", fontSize: "12px", marginTop: "-5px" }}>
        {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
      </span>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        actionTitle={"시간 충족 완료"}
      >
        <p className="explanation">시간이 되었습니다! 보상을 받아가세요!</p>{" "}
      </Modal>
    </>
  );
};

export default Timer;
