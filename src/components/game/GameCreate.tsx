import React, { ChangeEvent, useEffect, useState } from 'react';
import { GameHeader } from '../layout/Header';
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';
const CharacterList = styled.ul`
    padding: 1.2rem 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
const CharacterItem = styled.li`
    width: calc(50% - 8px);
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
    background-color: #efefef;
    margin-bottom: 8px;
    color: #777;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6;
`;

const InputStyle = styled.input`
    width: 90%;
    padding: 1rem;
    border: none;
    border-radius: 16px;
    background-color: #efefef;
    &::placeholder {
        color: #777;
    }
`;

const Form = styled.form`
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
    const [characterName, setCharacterName] = useState<string>('');
    const onClickHandler = () => {
        console.log('click');
        setIsOpen(!isOpen);
    };
    const onClickCreateHandler = () => {
        alert('click');
    };
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCharacterName(event.target.value);
    };
    const onSubmitHandler = () => {
        alert('submit');
    };
    return (
        <>
            <GameHeader />
            <CharacterList>
                <CharacterItem>
                    <CharacterBox>
                        <img src="" alt="" />
                    </CharacterBox>
                    <p className="center">요정요정1</p>
                </CharacterItem>
                <CharacterItem>
                    <CharacterBox>
                        <img src="" alt="" />
                    </CharacterBox>
                    <p className="center">요정요정1</p>
                </CharacterItem>
                <CharacterItem>
                    <CharacterBox>
                        준비중인 요정입니다. <br /> 기대해주세요
                    </CharacterBox>
                </CharacterItem>
            </CharacterList>
            <Button onClick={onClickHandler}>캐릭터 생성</Button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClickEvent={onClickCreateHandler}>
                <Form action="" onSubmit={onSubmitHandler}>
                    <CharacterBox $width={'160px'}>
                        <img src="" alt="" />
                    </CharacterBox>
                    <InputStyle type="text" value={'test'} onChange={onChangeHandler} />
                    <Button type="submit">캐릭터 생성</Button>
                </Form>
            </Modal>
        </>
    );
};

export default GameCreate;
