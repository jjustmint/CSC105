import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
// import Todo from "./components/Todo";
import React from "react";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
import BottomNav from "./components/BottomNav";
function App(){
    return (
      // <div className="App">
      //     <div className="home">
      //         <Home />
      //     </div>
      //     <div className="todo">
      //         <Todo />
      //     </div>
      // </div>
      // <TodoPage />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    );
}
export default App;