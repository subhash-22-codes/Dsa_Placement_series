import React from 'react';
import { questions } from '../data/questions';
import { CheckCircle, ExternalLink, Calendar, Building } from 'lucide-react';

const DSAQuestions = ({ searchTerm, selectedPattern, completedDays, toggleDayCompletion }) => {
  // Filter questions based on search term and selected pattern
  const filteredQuestions = questions.filter(dayGroup => {
    const dayQuestions = dayGroup.questions.filter(question => {
      const matchesSearch = searchTerm === '' || 
        question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.pattern.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (question.company && question.company.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPattern = selectedPattern === '' || 
        question.pattern.includes(selectedPattern);
      
      return matchesSearch && matchesPattern;
    });
    
    return dayQuestions.length > 0;
  });

  const totalDays = questions.length;
  const completedCount = completedDays.length;
  const progressPercentage = (completedCount / totalDays) * 100;

  return (
    <section id="questions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            DSA Series - 30 Questions in 15 Days
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Structured learning path with handpicked questions for placement preparation
          </p>
          
          {/* Progress Tracker */}
          <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-700">
                {completedCount}/{totalDays} days completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {Math.round(progressPercentage)}% complete
            </p>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-8">
          {filteredQuestions.map((dayGroup) => (
            <div key={dayGroup.day} className="day-card">
              {/* Day Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3 md:gap-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary-600" size={20} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {dayGroup.title}
                    </h3>
                  </div>
                  {completedDays.includes(dayGroup.day) && (
                    <CheckCircle className="text-green-500" size={24} />
                  )}
                </div>
                <button
                  onClick={() => toggleDayCompletion(dayGroup.day)}
                  className={`w-full md:w-auto mt-2 md:mt-0 px-4 py-2 rounded-lg font-medium transition-colors ${
                    completedDays.includes(dayGroup.day)
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {completedDays.includes(dayGroup.day) ? 'Completed' : 'Mark Complete'}
                </button>
              </div>

              {/* Questions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dayGroup.questions.map((question) => (
                  <div key={question.id} className="question-card card-hover">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 flex-1">
                        {question.title}
                      </h4>
                      <a
                        href={question.leetcodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 ml-2"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <div className="space-y-2">
                      <div className={`pattern-tag ${question.patternColor}`}>
                        {question.pattern}
                      </div>
                      
                      {question.company && (
                        <div className="flex items-center gap-1">
                          <Building size={14} className="text-gray-500" />
                          <span className="company-tag">{question.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or pattern filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DSAQuestions; 