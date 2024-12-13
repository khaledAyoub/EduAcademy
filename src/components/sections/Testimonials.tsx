import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialCard } from '../ui/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Emily Rodriguez',
    role: 'Software Developer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'The courses here transformed my career. The instructors are incredibly knowledgeable and supportive. I went from beginner to professional in just months.',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Data Scientist',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    text: 'Outstanding platform for learning data science. The practical projects and real-world applications really helped me understand complex concepts.',
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'UX Designer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'The UI/UX courses here are exceptional. The content is up-to-date with current industry standards, and the community support is amazing.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}