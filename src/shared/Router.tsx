import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';
import TestPage from '../pages/TestPage';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/game" element={<GamePage />}></Route>
                <Route path="/test" element={<TestPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
