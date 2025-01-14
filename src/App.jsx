import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/user/Profile';
import Auth from './pages/user/Auth';
import Contest from './pages/contests/Contest.jsx';
import Contests from './pages/contests/Contests.jsx';
import Guides from './pages/guides/Guides.jsx';
import Guide from './pages/guides/Guide.jsx';
import Data from './pages/data/Data.jsx';
import Datum from './pages/data/Datum.jsx';
import NotFound from './pages/errors/NotFound.jsx';

const App = () => {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", savedTheme === "dark" || (!savedTheme && systemTheme));
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/contests/" element={<Contests />} />
          <Route path="/contests/:id" element={<Contest />} />
          <Route path="/guides/" element={<Guides />} />
          <Route path="/guides/:id" element={<Guide />} />
          <Route path="/data/" element={<Data />} />
          <Route path="/data/:id" element={<Datum />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/auth/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
