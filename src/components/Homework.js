import React, { useState } from 'react';
import { homeworkQuestions } from '../data/questions';
import { BookOpen, ExternalLink, Clock, Zap, Building2, ChevronDown, ChevronUp } from 'lucide-react';

const Homework = ({ completedQuestions, toggleQuestionCompletion }) => {
  const [expandedConcept, setExpandedConcept] = useState(null);

  const toggleConcept = (concept) => {
    setExpandedConcept(expandedConcept === concept ? null : concept);
  };



  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressForConcept = (concept) => {
    const conceptQuestions = concept.questions.map(q => q.id);
    const completed = completedQuestions.filter(id => conceptQuestions.includes(id));
    return (completed.length / conceptQuestions.length) * 100;
  };

  return (
    <section id="homework" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Homework & Practice</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master each concept with carefully curated practice problems. 
            Each section contains 4 problems ranging from Easy to Hard difficulty.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-gray-600">Concepts</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">15</p>
                <p className="text-gray-600">Problems</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">4</p>
                <p className="text-gray-600">Per Concept</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-gray-600">Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="space-y-6">
          {homeworkQuestions.map((concept, index) => (
            <div key={concept.concept} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Concept Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleConcept(concept.concept)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${concept.color}`}>
                      {concept.concept}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{concept.concept}</h3>
                      <p className="text-gray-600 mt-1">{concept.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Progress */}
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Progress</div>
                      <div className="text-lg font-bold text-gray-900">
                        {Math.round(getProgressForConcept(concept))}%
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                        style={{ width: `${getProgressForConcept(concept)}%` }}
                      ></div>
                    </div>
                    {/* Expand/Collapse Icon */}
                    {expandedConcept === concept.concept ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Questions List */}
              {expandedConcept === concept.concept && (
                <div className="border-t border-gray-100">
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {concept.questions.map((question) => (
                        <div 
                          key={question.id} 
                          className={`border-2 rounded-xl p-6 transition-all duration-200 hover:shadow-md ${
                            completedQuestions.includes(question.id) 
                              ? 'border-green-200 bg-green-50' 
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          {/* Question Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="text-lg font-semibold text-gray-900">
                                  {question.title}
                                </h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(question.difficulty)}`}>
                                  {question.difficulty}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {question.description}
                              </p>
                            </div>
                            <button
                              onClick={() => toggleQuestionCompletion(question.id)}
                              className={`ml-4 p-2 rounded-full transition-colors ${
                                completedQuestions.includes(question.id)
                                  ? 'bg-green-100 text-green-600 hover:bg-green-200'
                                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                              }`}
                            >
                              {completedQuestions.includes(question.id) ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          </div>

                          {/* Question Details */}
                          <div className="space-y-3">
                            {/* Companies */}
                            {question.companies && (
                              <div className="flex items-center space-x-2">
                                <Building2 className="w-4 h-4 text-gray-400" />
                                <div className="flex flex-wrap gap-1">
                                  {question.companies.map((company, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                      {company}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Complexity */}
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{question.timeComplexity}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Zap className="w-4 h-4" />
                                <span>{question.spaceComplexity}</span>
                              </div>
                            </div>

                            {/* Leetcode Link */}
                            <a
                              href={question.leetcodeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                              <span>Solve on LeetCode</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Master DSA?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Complete all practice problems to strengthen your understanding of each concept. 
              Track your progress and build confidence for your coding interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View All Problems
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Track Progress
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Homework; 