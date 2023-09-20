import React from "react";
import styled from "styled-components";

const Description = () => {
  const DescriptionBlock = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 100%;
    p {
      line-height: 25px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      &.highlight {
        font-weight: bold;
      }
    }
  `;
  const LookidsLogo = styled.h1`
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: bold;
  `;
  return (
    <DescriptionBlock>
      <LookidsLogo>Lookids</LookidsLogo>
      <p className="highlight">지금 바로 가입해서</p>
      <p>
        룩키즈의 특별 케어를
        <br /> 받아보세요!
      </p>
    </DescriptionBlock>
  );
};

export default Description;
