import React from 'react';
import { notifications } from '../mockData';
import { usePost } from '../context/PostContext';

const NotificationItem = ({ notification }) => {
  const { navigateToPost } = usePost();

  const getNotificationText = () => {
    switch (notification.type) {
      case 'like':
        return 'đã thích bài viết của bạn';
      case 'comment':
        return 'đã bình luận về bài viết của bạn';
      case 'share':
        return 'đã chia sẻ bài viết của bạn';
      case 'friend_request':
        return 'đã gửi lời mời kết bạn';
      case 'friend_accept':
        return 'đã chấp nhận lời mời kết bạn';
      default:
        return '';
    }
  };

  const handleClick = () => {
    if (notification.target?.type === 'post' && notification.target.id) {
      navigateToPost(notification.target.id);
    }
  };

  return (
    <div
      className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
        !notification.isRead ? 'bg-blue-50' : ''
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <img
        src={notification.actor.avatar}
        alt={notification.actor.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-3 flex-1">
        <p className="text-sm">
          <span className="font-semibold">{notification.actor.name}</span>{' '}
          {getNotificationText()}
          {notification.target?.preview && (
            <span className="text-gray-600 block mt-1 text-xs">
              "{notification.target.preview.substring(0, 50)}..."
            </span>
          )}
        </p>
        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
      </div>
      {!notification.isRead && (
        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
      )}
    </div>
  );
};

const NotificationList = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-h-[600px] overflow-y-auto">
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Thông báo</h2>
          <button className="text-blue-500 text-sm hover:text-blue-600">
            Đánh dấu tất cả đã đọc
          </button>
        </div>
      </div>
      <div className="divide-y">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
      {notifications.length === 0 && (
        <div className="p-4 text-center text-gray-500">
          Không có thông báo nào
        </div>
      )}
    </div>
  );
};

export default NotificationList;
