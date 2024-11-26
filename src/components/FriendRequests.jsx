import React from 'react';

const FriendRequests = ({ requests }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Friend Requests</h2>
        <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
          See All
        </button>
      </div>
      
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="flex items-start space-x-3">
            <img
              src={request.avatar}
              alt={request.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {request.name}
                </h3>
                <span className="text-xs text-gray-500">{request.time}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {request.mutualFriends} mutual friends
              </p>
              <div className="flex space-x-2 mt-2">
                <button className="flex-1 bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                  Accept
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequests;
