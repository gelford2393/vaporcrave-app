
import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Shop from './pages/Shop';
function App() {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div >
  );
}

export default App;
