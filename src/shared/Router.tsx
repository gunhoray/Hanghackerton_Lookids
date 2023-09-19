import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';
import LoginPage from "../pages/loginpage/LoginPage";
import Oauth from "../components/lookidslogin/Oauth";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/oauth" element={<Oauth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
