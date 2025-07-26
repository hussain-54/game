import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Rules from './pages/Rules';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';
import GameOverview from './pages/GameOverview';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-overview" element={<GameOverview />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/store" element={<Store />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
