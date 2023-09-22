import React, { useEffect } from "react";
import GameCreate from "../components/game/GameCreate";
import GamePlay from "../components/game/gameplay/GamePlay";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { fetchUser } from "../apis/AuthApi";
import { fetchUserSuccess } from "../redux/modules/userSlice";


const GamePage = (hasFairy: any) => {
  //   console.log(data);
  //   console.log(hasFairy ? "Has fairy" : "No fairy");
  return <>{hasFairy ? <GamePlay /> : <GameCreate />}</>;
};

export default GamePage;
