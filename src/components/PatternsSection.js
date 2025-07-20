import React from 'react';
import { patterns } from '../data/questions';

const PatternsSection = ({ selectedPattern, setSelectedPattern }) => {
  return (
    <section id="patterns" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patterns Covered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these essential DSA patterns to solve any array and string problem in coding interviews
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {patterns.map((pattern, index) => (
            <button
              key={index}
              onClick={() => setSelectedPattern(selectedPattern === pattern.name ? '' : pattern.name)}
              className={`pattern-tag ${pattern.color} ${
                selectedPattern === pattern.name 
                  ? 'ring-2 ring-primary-500 ring-offset-2' 
                  : 'hover:scale-105'
              } transition-all duration-200 cursor-pointer`}
            >
              {pattern.name}
            </button>
          ))}
        </div>

        {selectedPattern && (
          <div className="text-center">
            <button
              onClick={() => setSelectedPattern('')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PatternsSection; 