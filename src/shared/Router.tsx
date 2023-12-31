import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import GamePage from "../pages/GamePage";
import LoginPage from "../pages/loginpage/LoginPage";
import Oauth from "../components/lookidslogin/Oauth";
import TestPage from "../pages/TestPage";
import GamePlay from "../components/game/gameplay/GamePlay";
import PurchasePage from "../pages/PurchasePage";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/game"
          element={<ProtectedRoute path="/game" element={<GamePage />} />}
        ></Route>
        <Route path="/playgame" element={<GamePlay />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/oauth" element={<Oauth />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/purchase" element={<PurchasePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
