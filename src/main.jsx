import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage.jsx';
import { Layout } from './components/Layout.jsx';
import { CitiesPage } from './pages/Cities.jsx';
import { CityDetailPage } from './pages/CityDetail.jsx';
import { CountriesPage } from './pages/Countries.jsx';
import { CountryDetailPage } from './pages/CountryDetail.jsx';
import { WishlistPage } from './pages/WishlistPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}/>
          <Route path="/cities" element={<CitiesPage />}/>
          <Route path="/cities/:id" element={<CityDetailPage />}/>
          <Route path="/countries" element={<CountriesPage />}/>
          <Route path="/countries/:id" element={<CountryDetailPage />}/>
          <Route path="/wishlist" element={<WishlistPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
