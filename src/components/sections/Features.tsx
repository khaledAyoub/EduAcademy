import React from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals'
  },
  {
    icon: BookOpen,
    title: 'Quality Content',
    description: 'Comprehensive learning materials'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with fellow learners'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}