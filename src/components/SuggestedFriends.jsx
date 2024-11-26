import React from 'react';

const SuggestedFriends = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">People You May Know</h2>
      </div>

      <div className="divide-y">
        {suggestions.map((person) => (
          <div key={person.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start space-x-4">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900">
                  {person.name}
                </h3>
                {person.mutualFriends > 0 && (
                  <p className="mt-1 text-sm text-gray-500">
                    {person.mutualFriends} mutual friends
                  </p>
                )}
                {person.location && (
                  <p className="mt-1 text-sm text-gray-500">
                    Lives in {person.location}
                  </p>
                )}
                {person.occupation && (
                  <p className="mt-1 text-sm text-gray-500">
                    Works at {person.occupation}
                  </p>
                )}
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Add Friend
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedFriends;
