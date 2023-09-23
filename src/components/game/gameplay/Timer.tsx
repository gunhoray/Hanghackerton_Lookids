import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { acquireReward } from "../../../apis/fairy";
import { useMutation, useQueryClient } from "react-query";

const Timer = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(acquireReward, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("user");
    },
  });

  const [getReward, setGetReward] = useState<boolean>(false);
  const expiredTimeStr = localStorage.getItem("RewardExpiredTime");
  const expiredTime = expiredTimeStr ? parseInt(expiredTimeStr) : Date.now();
  const initialCurrentTime = isNaN(expiredTime) ? 0 : expiredTime - Date.now();
  const [currentTime, setCurrentTime] = useState(initialCurrentTime);
  useEffect(() => {
    if (Date.now() >= expiredTime) {
      setGetReward(true);
      return;
    }

    // Decrease time remaining every second
    const timerId = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1000);
    }, 1000);

    // Clean up interval on unmount or when time is up
    return () => clearInterval(timerId);
  }, [currentTime]);

  const rewardHandler = async () => {
    const startTime = Date.now();
    const expirationTime = startTime + 1 * 60 * 1000;
    localStorage.setItem("RewardStartTime", startTime.toString());
    localStorage.setItem("RewardExpiredTime", expirationTime.toString());
    setCurrentTime(expirationTime - Date.now());

    try {
      // Call the acquireReward function when the reward is claimed
      await mutation.mutateAsync({ dew: 0, magicPowder: 0, heart: 1 });
      setGetReward(false);

      console.log("The reward has been successfully claimed!");
    } catch (error) {
      console.error("Failed to claim the reward:", error);

      // Handle error appropriately here...
    }
  };
  const minutesRemaining = Math.floor(currentTime / (60 * 1000));
  const secondsRemaining = Math.floor((currentTime % (60 * 1000)) / 1000);

  // console.log(minutesRemaining + ":" + secondsRemaining);
  return (
    <>
      {getReward && getReward ? (
        <button style={{ color: "orange" }} onClick={rewardHandler}>
          보상
        </button>
      ) : (
        <>
          <p
            style={{
              color: "orange",
              fontSize: "12px",
              justifyContent: "center",
            }}
          >
            누적 보상까지
          </p>
          <span
            style={{ color: "orange", fontSize: "12px", marginTop: "-5px" }}
          >
            {minutesRemaining} : {secondsRemaining}
          </span>
        </>
      )}
    </>
  );
};

export default Timer;
