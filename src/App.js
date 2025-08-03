import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PatternsSection from './components/PatternsSection';
import DSAQuestions from './components/DSAQuestions';
import Homework from './components/Homework';
import Footer from './components/Footer';

function App() {
  const [completedDays, setCompletedDays] = useState([]);
  const [completedHomework, setCompletedHomework] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPattern, setSelectedPattern] = useState('');

  // Load completed days from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedDays');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  // Load completed homework from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedHomework');
    if (saved) {
      setCompletedHomework(JSON.parse(saved));
    }
  }, []);

  // Save completed days to localStorage
  useEffect(() => {
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
  }, [completedDays]);

  // Save completed homework to localStorage
  useEffect(() => {
    localStorage.setItem('completedHomework', JSON.stringify(completedHomework));
  }, [completedHomework]);

  const toggleDayCompletion = (day) => {
    setCompletedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const toggleHomeworkCompletion = (questionId) => {
    setCompletedHomework(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedPattern={selectedPattern}
        setSelectedPattern={setSelectedPattern}
      />
      <Hero />
      <PatternsSection 
        selectedPattern={selectedPattern}
        setSelectedPattern={setSelectedPattern}
      />
      <DSAQuestions 
        searchTerm={searchTerm}
        selectedPattern={selectedPattern}
        completedDays={completedDays}
        toggleDayCompletion={toggleDayCompletion}
      />
      <Homework 
        completedQuestions={completedHomework}
        toggleQuestionCompletion={toggleHomeworkCompletion}
      />
      <Footer />
    </div>
  );
}

export default App; 