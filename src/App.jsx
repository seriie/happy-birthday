import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Landing from './pages/Landing';
import Story from './pages/Story';
import Gallery from './pages/Gallery';
import Wish from './pages/Wish';
import Celebrate from './pages/Celebrate';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/celebrate" element={<Celebrate />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
