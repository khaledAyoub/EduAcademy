import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { FeaturedCourses } from './components/sections/FeaturedCourses';
import { Testimonials } from './components/sections/Testimonials';
import { SampleLesson } from './components/sections/SampleLesson';

function App() {
  return (
    <Layout>
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <Features />
        <FeaturedCourses />
        <Testimonials />
        <SampleLesson />
      </div>
    </Layout>
  );
}

export default App;