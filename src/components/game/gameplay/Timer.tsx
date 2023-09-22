import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/configStore";

const Timer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { time, getReward } = useSelector((state: RootState) => {
    return state.heartToast;
  });
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);

  // useEffect(() => {
  //   if (time <= 0) {
  //     setIsOpen(true);
  //     return;
  //   }

  //   // Decrease time remaining every second
  //   const timerId = setInterval(() => {
  //     setTimeRemaining((prevTime) => prevTime - 1);
  //   }, 1000);

  //   // Clean up interval on unmount or when time is up
  //   return () => clearInterval(timerId);
  // }, [time]);
  console.log(time);
  return (
    <>
      <p
        style={{ color: "orange", fontSize: "12px", justifyContent: "center" }}
      >
        누적 보상까지
      </p>
      <span style={{ color: "orange", fontSize: "12px", marginTop: "-5px" }}>
        {Math.floor(time)}:{time % 60}
      </span>
    </>
  );
};

export default Timer;
