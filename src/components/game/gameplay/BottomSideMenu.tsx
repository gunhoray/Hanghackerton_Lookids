import React from "react";
import styled from "styled-components";

const BottomsideMenu = styled.div`
  display: flex;
  margin-top: 40%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const PlayPageBottomButton = styled.button`
  width: 80px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
`;
const BottomSideMenu = () => {
  return (
    <BottomsideMenu>
      <PlayPageBottomButton className="1">Button1</PlayPageBottomButton>
      <PlayPageBottomButton className="2">Button2</PlayPageBottomButton>
      <PlayPageBottomButton className="3">Button3</PlayPageBottomButton>
    </BottomsideMenu>
  );
};

export default BottomSideMenu;
