import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'

import MainView from "./pages/MainView/MainView"
import NewAccount from "./pages/NewAccount/NewAccount"
import HabitTracker from "./pages/HabitTracker/HabitTracker"
import HabitsToday from "./pages/HabitsToday/HabitsToday"
import Historic from "./pages/Historic/Historic"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView/>} />
        <Route path="/newaccount" element={<NewAccount/>} />
        <Route path="/habit" element={<HabitTracker/>}/>
        <Route path="/today" element={<HabitsToday/>}/>
        <Route path="/historico" element={<Historic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
