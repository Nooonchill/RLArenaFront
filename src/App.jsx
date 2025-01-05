import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Competitions from './pages/competitions/Competitions.jsx';
import Competition from './pages/competitions/Competition.jsx';
import Guides from './pages/guides/Guides.jsx';
import Guide from './pages/guides/Guide.jsx';
import Data from './pages/data/Data.jsx';
import Datum from './pages/data/Datum.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/competitions/" element={<Competitions />} />
          <Route path="/competitions/:id" element={<Competition />} />
          <Route path="/guides/" element={<Guides />} />
          <Route path="/guides/:id" element={<Guide />} />
          <Route path="/data/" element={<Data />} />
          <Route path="/data/:id" element={<Datum />} />
        </Route>
        <Route path="/auth/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
