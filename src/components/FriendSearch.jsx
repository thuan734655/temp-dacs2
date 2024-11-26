import React, { useState } from 'react';

const FriendSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    mutualFriends: false,
    online: false
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, filters });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <form onSubmit={handleSearch}>
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search friends..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap gap-4">
          {/* Location Filter */}
          <div className="flex-1 min-w-[200px]">
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Locations</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={filters.mutualFriends}
                onChange={(e) =>
                  setFilters({ ...filters, mutualFriends: e.target.checked })
                }
                className="rounded text-blue-500 focus:ring-blue-500"
              />
              <span>Mutual Friends</span>
            </label>
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={filters.online}
                onChange={(e) =>
                  setFilters({ ...filters, online: e.target.checked })
                }
                className="rounded text-blue-500 focus:ring-blue-500"
              />
              <span>Online Now</span>
            </label>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FriendSearch;
