import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/game" element={<GamePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
