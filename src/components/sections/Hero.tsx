import React from 'react';
import { TypewriterText } from '../ui/TypewriterText';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Future with Expert-Led Education
          </h1>
          <TypewriterText />
          <button className="bg-white text-indigo-600 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}