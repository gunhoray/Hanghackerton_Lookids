import React, { ChangeEvent, useEffect, useState } from 'react';
import { GameHeader } from '../layout/Header';
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ReactComponent as Character1 } from '../../assets/elemental.pink.1.svg';
import { ReactComponent as Character2 } from '../../assets/elemental.green.1.svg';
import useInput from '../../hooks/useInput';
import MySVGComponent from '../gamecharcter/Folwery';
import Green1 from '../gamecharcter/Leafy';
const CharacterList = styled.ul`
    padding: 1.2rem 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
const CharacterItem = styled.li`
    width: calc(50% - 8px);
    cursor: pointer;

    .center {
        text-align: center;
    }
`;
type characterProps = {
    $width?: string;
};
const CharacterBox = styled.figure<characterProps>`
    width: ${(props) => (props.$width ? props.$width : '100%')};
    height: 180px;
    border-radius: 20px;
    border: 3px solid #efefef;
    background-color: #efefef;
    margin-bottom: 8px;
    color: #777;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6;

    &:hover {
        border: 3px solid #90ee90;
    }
`;

const InputStyle = styled.input`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 16px;
    background-color: #efefef;
    &::placeholder {
        color: #777;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const GameCreate = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [characterIndex, setCharacterIndex] = useState<number>(1);
    const [characterName, CharacterHandler, setCharacterName] = useInput('');

    const onClickCreateHandler = (index: number) => {
        setIsOpen(!isOpen);
        setCharacterIndex(index);
    };

    const onSubmitHandler = () => {
        alert('submit');
    };
    return (
      <>
        <GameHeader headerName="캐릭터 생성" />
        <CharacterList>
          <CharacterItem onClick={() => onClickCreateHandler(1)}>
            <CharacterBox>
              <MySVGComponent />
              {/* <Character1 /> */}
            </CharacterBox>
            <p className="center">요정요정1</p>
          </CharacterItem>
          <CharacterItem onClick={() => onClickCreateHandler(2)}>
            <CharacterBox>
              <Green1 />
            </CharacterBox>
            <p className="center">요정요정2</p>
          </CharacterItem>
          <CharacterItem>
            <CharacterBox>
              준비중인 요정입니다. <br /> 기대해주세요
            </CharacterBox>
          </CharacterItem>
        </CharacterList>
        {/* <Button onClick={onClickHandler}>캐릭터 생성</Button> */}
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          actionTitle={"캐릭터 생성"}
        >
          <Form action="" onSubmit={onSubmitHandler}>
            {characterIndex === 1 ? <Character1 /> : <Character2 />}
            <InputStyle
              type="text"
              value={characterName}
              onChange={CharacterHandler}
              placeholder="요정의 이름을 지어주세요"
            />
            <Button type="submit">캐릭터 생성</Button>
          </Form>
        </Modal>
      </>
    );
};

export default GameCreate;
