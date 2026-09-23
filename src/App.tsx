import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import B2B from './pages/B2B';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import WhatsAppButton from './components/WhatsAppButton';
import WaterVerify from './pages/verify/WaterVerify';
import JeeraVerify from './pages/verify/JeeraVerify';
import SodaVerify from './pages/verify/SodaVerify';

function App() {
  return (
    <>
      <LoadingScreen />

      {/* ── QR-only verify routes: completely outside Layout (no nav/footer) ── */}
      <Routes>
        <Route path="/verify/water/:token" element={<WaterVerify />} />
        <Route path="/verify/jeera/:token" element={<JeeraVerify />} />
        <Route path="/verify/soda/:token" element={<SodaVerify />} />

        {/* ── All regular site routes wrapped in Layout ── */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/b2b" element={<B2B />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <WhatsAppButton />
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;
