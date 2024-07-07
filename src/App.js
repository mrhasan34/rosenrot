import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experiment from './pages/Experiment';
import Story from './pages/Story';
import Art from './pages/Art';
import Science from './pages/Science';
import Philosophy from './pages/Philosophy';
import BookReview from './pages/BookReview';
import MovieReview from './pages/MovieReview';
import ClipReview from './pages/ClipReview';
import PersonalDevelopment from './pages/PersonalDevelopment';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiment" element={<Experiment />} />
          <Route path="/story" element={<Story />} />
          <Route path="/art" element={<Art />} />
          <Route path="/science" element={<Science />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/bookreview" element={<BookReview />} />
          <Route path="/moviereview" element={<MovieReview />} />
          <Route path="/clipreview" element={<ClipReview />} />
          <Route path="/personaldevelopment" element={<PersonalDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
