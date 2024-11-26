import React from 'react';

const Sidebar = ({ currentView, onViewChange }) => {
  const menuItems = [
    {
      id: 'feed',
      name: 'Bảng tin',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
          />
        </svg>
      )
    },
    {
      id: 'friends',
      name: 'Tìm bạn bè',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )
    }
  ];

  const quickStats = [
    {
      label: 'Bạn bè',
      value: '2.8K'
    },
    {
      label: 'Ảnh',
      value: '480'
    },
    {
      label: 'Lượt thích',
      value: '12.4K'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6 p-2">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?seed=current-user"
          alt="Ảnh đại diện"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Nguyễn Văn A</h2>
          <p className="text-sm text-gray-500">Xem trang cá nhân</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="text-lg font-semibold text-gray-900">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              currentView === item.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Create Post Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Tạo bài viết</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
