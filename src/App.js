import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import UserContext from '../src/UserContext';

import MainView from "./pages/MainView/MainView"
import NewAccount from "./pages/NewAccount/NewAccount"
import HabitTracker from "./pages/HabitTracker/HabitTracker"
import HabitsToday from "./pages/HabitsToday/HabitsToday"
import Historic from "./pages/Historic/Historic"

function App() {

  const [info, setInfo] = useState([]);
  const [habits, setHabits] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const [percent, setPercent] = useState(0)
  const [sidebar, setSidebar] = useState(false);

  return (
    <UserContext.Provider value={{ info, setInfo, sidebar, setSidebar, habits, setHabits, todayData, setTodayData, percent, setPercent }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/habit" element={<HabitTracker />} />
          <Route path="/today" element={<HabitsToday />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;
