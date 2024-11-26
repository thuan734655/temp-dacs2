import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope, FaUserFriends } from 'react-icons/fa';
import NotificationList from './NotificationList';
import { notifications, friendRequests } from '../mockData';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const unreadNotifications = notifications.filter(n => !n.isRead).length;

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">Mạng xã hội</h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl px-2 lg:px-4 mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm bạn bè, bài viết..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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

            {/* Mobile Search Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <svg
                className="h-6 w-6 text-gray-600"
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
            </button>

            {/* Right Section */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              {/* Friend Requests */}
              <div className="relative">
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 relative"
                  onClick={() => {
                    setShowFriendRequests(!showFriendRequests);
                    setShowNotifications(false);
                  }}
                >
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {friendRequests.length > 0 && (
                    <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {friendRequests.length}
                    </span>
                  )}
                </button>
                {showFriendRequests && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[80vh] overflow-y-auto">
                    <h3 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                      Lời mời kết bạn
                    </h3>
                    <div className="divide-y divide-gray-100">
                      {friendRequests.map(request => (
                        <div key={request.id} className="px-4 py-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <img
                                src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${request.id}`}
                                alt="Avatar"
                                className="h-10 w-10 rounded-full"
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Lời mời kết bạn mới</p>
                                <p className="text-xs text-gray-500">{request.timestamp}</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                                Chấp nhận
                              </button>
                              <button className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                                Từ chối
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 relative"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowFriendRequests(false);
                  }}
                >
                  <FaBell className="text-gray-600 text-xl" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-96">
                    <NotificationList />
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/6.x/avataaars/svg?seed=current-user"
                  alt="Ảnh đại diện"
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm bạn bè, bài viết..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                autoFocus
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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
            <button
              className="ml-4 p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowMobileSearch(false)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
