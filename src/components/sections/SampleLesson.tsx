import React from 'react';
import { AudioPlayer } from '../ui/AudioPlayer';
import { featuredCourses } from '../../data/courses';

export function SampleLesson() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Sample Lesson
        </h2>
        <AudioPlayer
          audioUrl={featuredCourses[0].audioUrl!}
          title="Introduction to Web Development"
        />
      </div>
    </section>
  );
}