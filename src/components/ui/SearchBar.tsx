import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <div className={`flex items-center ${isExpanded ? 'w-full md:w-64' : 'w-auto'}`}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`
            bg-gray-100 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500
            transition-all duration-300 ease-in-out
            ${isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0 md:w-64 md:opacity-100'}
          `}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-600 hover:text-indigo-600 md:hidden absolute right-0"
        >
          {isExpanded ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
        </button>
        <button className="hidden md:block p-2 text-gray-600 hover:text-indigo-600 absolute right-0">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}