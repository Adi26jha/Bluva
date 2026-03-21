import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import B2B from './pages/B2B';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <LoadingScreen />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
