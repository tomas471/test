import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import CountryDetails from './pages/CountryDetails';
import Quiz from './pages/Quiz';
import Fun from "./pages/Fun";
import MyCulture from "./pages/MyCulture";
import CultureDetails from "./pages/CultureDetails";
import SpellingGame from './pages/games/SpellingGame';
import PopulationGame from './pages/games/PopulationGame';
import AreaGame from './pages/games/AreaGame';
import GuessCountryGame from './pages/games/GuessCountryGame';
import WordleGame from './pages/games/WordleGame';
import Account from './pages/Account';
import Achievements from './pages/Achievements';
import Badges from './pages/Badges';

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
  const [selectedCultureId, setSelectedCultureId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      const countryMatch = path.match(/^\/country\/(.+)$/);
      const cultureMatch = path.match(/^\/culture\/(.+)$/);
      
      if (countryMatch) {
        setCurrentPage('country');
        setSelectedCountry(decodeURIComponent(countryMatch[1]));
      } else if (cultureMatch) {
        setCurrentPage('culture-details');
        setSelectedCultureId(decodeURIComponent(cultureMatch[1]));
      } else if (path === '/about') {
        setCurrentPage('about');
        document.title = 'About Us | GoeJungle';
      } else if (path === '/education') {
        setCurrentPage('education');
        document.title = 'Education | GoeJungle';
      } else if (path === '/quize') {
        setCurrentPage('quiz');
        document.title = 'Quiz | GoeJungle';
      } else if (path === '/fun') {
        setCurrentPage('fun');
        document.title = 'Fun | GoeJungle';
      } else if (path === '/games/spelling') {
        setCurrentPage('spelling-game');
        document.title = 'Spelling Challenge | GoeJungle';
      } else if (path === '/games/population') {
        setCurrentPage('population-game');
        document.title = 'Population Challenge | GoeJungle';
      } else if (path === '/games/area') {
        setCurrentPage('area-game');
        document.title = 'Area Challenge | GoeJungle';
      } else if (path === '/games/guess-country') {
        setCurrentPage('guess-country-game');
        document.title = 'Guess the Country | GoeJungle';
      } else if (path === '/games/wordle') {
        setCurrentPage('wordle-game');
        document.title = 'Country Wordle | GoeJungle';
      } else if (path === '/myculture') {
        setCurrentPage('myculture');
        document.title = 'MyCulture | GoeJungle';
      } else if (path === '/account') {
        setCurrentPage('account');
        document.title = 'My Account | GoeJungle';
      } else if (path === '/achievements') {
        setCurrentPage('achievements');
        document.title = 'Achievements | GoeJungle';
      } else if (path === '/badges') {
        setCurrentPage('badges');
        document.title = 'Badges | GoeJungle';
      } else {
        setCurrentPage('home');
        document.title = 'GoeJungle | Explore the World';
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);

    document.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          handleNavigation();
        }
      }
    });

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'education' && <Education />}
        {currentPage === 'country' && selectedCountry && (
          <CountryDetails countryName={selectedCountry} />
        )}
        {currentPage === 'quiz' && <Quiz />}
        {currentPage === 'fun' && <Fun />}
        {currentPage === 'spelling-game' && <SpellingGame />}
        {currentPage === 'population-game' && <PopulationGame />}
        {currentPage === 'area-game' && <AreaGame />}
        {currentPage === 'guess-country-game' && <GuessCountryGame />}
        {currentPage === 'wordle-game' && <WordleGame />}
        {currentPage === 'myculture' && <MyCulture />}
        {currentPage === 'culture-details' && selectedCultureId && (
          <CultureDetails id={selectedCultureId} />
        )}
        {currentPage === 'account' && <Account />}
        {currentPage === 'achievements' && <Achievements />}
        {currentPage === 'badges' && <Badges />}
      </Layout>
    </QueryClientProvider>
  );
}

export default App;