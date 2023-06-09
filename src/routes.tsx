import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/details/Details';
import Home from './pages/home';
import Similar from './pages/similar/Similar';
import Search from './pages/search';

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/similar/:id" element={<Similar />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Router>
  );
}
