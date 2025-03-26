import  { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
 