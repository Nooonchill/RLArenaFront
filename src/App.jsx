import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Competitions from './pages/Competitions';
import Auth from './pages/Auth';
import Competition from './pages/Competition.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/competitions/" element={<Competitions />} />
          <Route path="/competitions/:id" element={<Competition />} />
        </Route>
        <Route path="/auth/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
