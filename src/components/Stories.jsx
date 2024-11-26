import React from 'react';

const Stories = ({ stories }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Stories</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {/* Create Story */}
        <div className="flex-shrink-0">
          <div className="w-28 h-48 bg-white rounded-xl shadow-sm overflow-hidden relative cursor-pointer group">
            <img
              src="https://api.dicebear.com/6.x/avataaars/svg?seed=current-user"
              alt="Your Avatar"
              className="w-full h-28 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-3 py-4 text-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 ring-4 ring-white relative -mt-8">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900">Create Story</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
          </div>
        </div>

        {/* User Stories */}
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0">
            <div className="w-28 h-48 rounded-xl overflow-hidden relative cursor-pointer group">
              {/* Story Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
              
              {/* Story Image */}
              <img
                src={`https://source.unsplash.com/random/400x600?${story.id}`}
                alt="Story"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* User Avatar */}
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-full ring-4 ring-blue-500 overflow-hidden">
                  <img
                    src={story.user.avatar}
                    alt={story.user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Story Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium truncate">
                  {story.user.name}
                </p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
