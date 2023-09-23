import React, { useState } from "react";
import styled from "styled-components";
import { Heart, MagicPowder, Water } from "../../../assets/icons/GameIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/configStore";
import { useMutation, useQueryClient } from "react-query";
import { itemtypeProps, usingItem } from "../../../apis/fairy";
import useSpeech from "../../../hooks/useSpeech";
import LevelUp from "../LevelUp";
import Shower from "./Shower";

const BottomsideMenu = styled.div`
  display: flex;
  margin-top: 80%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
`;
const PlayPageBottomButton = styled.button`
  width: 80px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 5px;
  &.love {
    background-color: lightpink;
  }
  &.magicpowder {
    background-color: #ffe294;
  }
  &.water {
    background-color: lightblue;
  }
`;

const heartSpeech = ["저도 많이 사랑해요", "우와앙", "좋아요!"];
const magicPowderSpeech = ["자라나라 쑥쑥"];
const dewSpeech = ["감사합니다!", "마침 목이 말랐어요", "와아아~"];

const BottomSideMenu = () => {
  const [showers, setShowers] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { inventoryToItems } = useSelector((state: RootState) => {
    return (
      state.user.data.inventory || {
        inventoryToItems: [
          {
            name: "dew",
            quantity: 5,
          },
          {
            name: "magicPowder",
            quantity: 3,
          },
          {
            name: "heart",
            quantity: 1,
          },
        ],
      }
    );
  });
  console.log(inventoryToItems);
  const { magicPowderGauge } = useSelector((state: RootState) => {
    return state.user.data.fairy || { magicPowderGauge: 90 };
  });

  const { speechEvent: heartEvent } = useSpeech(heartSpeech);
  const { speechEvent: magicPowderEvent } = useSpeech(magicPowderSpeech);
  const { speechEvent: dewEvent } = useSpeech(dewSpeech);

  const queryClient = useQueryClient();

  const mutation = useMutation((itemType: string) => usingItem(itemType), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
    },
  });

  const onClickHandler = (itemType: string) => {
    mutation.mutate(itemType);
    if (itemType === "heart") {
      setShowers("heart");
      setTimeout(() => setShowers(""), 2000);
      return heartEvent();
    } else if (itemType === "magicPowder") {
      setShowers("magicPowder");
      setTimeout(() => setShowers(""), 2000);
      return magicPowderEvent();
    } else if (itemType === "dew") {
      setShowers("dew");
      setTimeout(() => setShowers(""), 2000);
      return dewEvent();
    }
  };

  return (
    <>
      {showers === "heart" && <Shower symbol={<Heart />} />}
      {showers === "magicPowder" && <Shower symbol={<MagicPowder />} />}
      {showers === "dew" && <Shower symbol={<Water />} />}

      <BottomsideMenu>
        <PlayPageBottomButton
          onClick={() => onClickHandler("heart")}
          disabled={inventoryToItems && inventoryToItems[2].quantity === 0}
        >
          <ButtonBox className="love">
            <Heart />
            사랑해주기 <br />
            <span>{inventoryToItems && inventoryToItems[2].quantity}개</span>
          </ButtonBox>
        </PlayPageBottomButton>
        <PlayPageBottomButton
          onClick={() => onClickHandler("magicPowder")}
          disabled={
            magicPowderGauge > 90 ||
            (inventoryToItems && inventoryToItems[1].quantity === 0)
          }
        >
          <ButtonBox className="magicpowder">
            <MagicPowder />
            마법가루 사용
            <br />
            <span>{inventoryToItems && inventoryToItems[1].quantity}개</span>
          </ButtonBox>
        </PlayPageBottomButton>
        <PlayPageBottomButton
          onClick={() => onClickHandler("dew")}
          disabled={inventoryToItems && inventoryToItems[0].quantity === 0}
        >
          <ButtonBox className="water">
            <Water />
            이슬먹이기
            <br />
            <span>{inventoryToItems && inventoryToItems[0].quantity}개</span>
          </ButtonBox>
        </PlayPageBottomButton>
      </BottomsideMenu>
    </>
  );
};

export default BottomSideMenu;
