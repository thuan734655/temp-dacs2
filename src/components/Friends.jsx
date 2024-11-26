import React, { useState } from 'react';
import { friendRequests, suggestedFriends, users } from '../mockData';

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [requests, setRequests] = useState(friendRequests);

  const handleAcceptRequest = (requestId) => {
    setRequests(requests.filter(request => request.id !== requestId));
  };

  const handleRejectRequest = (requestId) => {
    setRequests(requests.filter(request => request.id !== requestId));
  };

  const getFriendData = (userId) => {
    return users.find(user => user.id === userId);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Search Section */}
      <div className="mb-4 md:mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for friends..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
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
      </div>

      {/* Friend Requests Section */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Friend Requests</h2>
        <div className="space-y-3 md:space-y-4">
          {requests.map(request => {
            const sender = getFriendData(request.senderId);
            return (
              <div key={request.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-3 md:p-4 rounded-lg space-y-2 md:space-y-0">
                <div className="flex items-center space-x-3">
                  <img
                    src={sender.avatar}
                    alt={sender.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-sm md:text-base">{sender.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{sender.bio}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAcceptRequest(request.id)}
                    className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleRejectRequest(request.id)}
                    className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Suggested Friends Section */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">People You May Know</h2>
        <div className="space-y-3 md:space-y-4">
          {suggestedFriends.map(friend => (
            <div key={friend.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-3 md:p-4 rounded-lg space-y-2 md:space-y-0">
              <div className="flex items-center space-x-3">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-sm md:text-base">{friend.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <button className="w-full md:w-auto px-3 md:px-4 py-1.5 md:py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
