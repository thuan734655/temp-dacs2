import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Friends</h2>
        <div className="flex items-center space-x-2">
          <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
            Find Friends
          </button>
          <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
            See All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="relative">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-12 h-12 rounded-full"
              />
              {friend.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {friend.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {friend.mutualFriends} mutual friends
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
