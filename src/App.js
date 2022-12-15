import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'

import MainView from "./components/MainView"
import Login from "./components/Login"
import HabitTracker from "./components/HabitTracker"
import HabitsToday from "./components/HabitsToday"
import Historic from "./components/Historic"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView/>} />
        {/* <Route path="/cadastro" element={<Login/>} />
        <Route path="/habitos" element={<HabitTracker/>}/>
        <Route path="/hoje" element={<HabitsToday/>}/>
        <Route path="/historico" element={<Historic/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
