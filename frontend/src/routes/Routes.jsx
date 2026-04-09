import {Routes, Route} from "react-router-dom";
import { TicTacToe } from "../games/TicTacToe/Main";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tic-tac-toe" element={<TicTacToe/>}/>
        </Routes>
    )
}

export default AppRoutes;