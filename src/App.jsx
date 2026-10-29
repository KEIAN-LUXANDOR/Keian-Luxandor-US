import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/About';
import Values from './pages/Values';
import Contact from './pages/Contact';
import StoreLocator from './pages/StoreLocator';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Search from './pages/Search';
import InfoPage from './pages/InfoPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections/:slug" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-values" element={<Values />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="store-locator" element={<StoreLocator />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="guides/:topic" element={<InfoPage />} />
        <Route path="shop-with-confidence" element={<InfoPage topic="shop-with-confidence" />} />
        <Route path="bridal-style-quiz" element={<InfoPage topic="bridal-style-quiz" />} />
        <Route path="accessibility" element={<InfoPage topic="accessibility" />} />
        <Route path="privacy-policy" element={<InfoPage topic="privacy-policy" />} />
        <Route path="sitemap" element={<InfoPage topic="sitemap" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}