import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import CountriesPage from './pages/countries/CountriesPage';
import PublicHolidaysPage from './pages/publicHolidays/PublicHolidaysPage';
import AboutPage from './pages/about/AboutPage';

function App() {

  return (
    <Router>
      <div className='min-h-screen bg-gray-50 text-gray-800'>
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/publicholiday/:countryCode" element={<PublicHolidaysPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
