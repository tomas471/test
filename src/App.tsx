import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import CountryDetails from './pages/CountryDetails';
import Quiz from './pages/Quiz';
import Fun from "./pages/Fun";
import GoeCommunity from "./pages/GoeCommunity";
import MyCulture from "./pages/MyCulture";
import CultureDetails from "./pages/CultureDetails";
import GoeJourney from "./pages/GoeJourney";
import GoeDebate from "./pages/GoeDebate";
import GoeFacts from "./pages/GoeFacts";
import GoeTips from "./pages/GoeTips";
import JourneyDetails from "./pages/JourneyDetails";
import DebateDetails from "./pages/DebateDetails";
import FactDetails from "./pages/FactDetails";
import TipDetails from "./pages/TipDetails";
import SpellingGame from './pages/games/SpellingGame';
import PopulationGame from './pages/games/PopulationGame';
import AreaGame from './pages/games/AreaGame';
import GuessCountryGame from './pages/games/GuessCountryGame';
import WordleGame from './pages/games/WordleGame';
import Account from './pages/Account';
import Achievements from './pages/Achievements';
import Badges from './pages/Badges';
import Login from './pages/Login';
import Signup from './pages/Signup';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/country/:countryName" element={<CountryDetails />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/games/spelling" element={<SpellingGame />} />
            <Route path="/games/population" element={<PopulationGame />} />
            <Route path="/games/area" element={<AreaGame />} />
            <Route path="/games/guess-country" element={<GuessCountryGame />} />
            <Route path="/games/wordle" element={<WordleGame />} />
            <Route path="/community" element={<GoeCommunity />} />
            <Route path="/community/goejourney" element={<GoeJourney />} />
            <Route path="/journey/:id" element={<JourneyDetails />} />
            <Route path="/community/geodebate" element={<GoeDebate />} />
            <Route path="/debate/:id" element={<DebateDetails />} />
            <Route path="/community/geofacts" element={<GoeFacts />} />
            <Route path="/facts/:id" element={<FactDetails />} />
            <Route path="/community/geotips" element={<GoeTips />} />
            <Route path="/tips/:id" element={<TipDetails />} />
            <Route path="/myculture" element={<MyCulture />} />
            <Route path="/culture/:id" element={<CultureDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;