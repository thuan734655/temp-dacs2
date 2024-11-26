import React from 'react';
import Post from './Post';

// Mock data cho các bài post
const posts = [
  {
    id: 1,
    author: 'Nguyễn Văn A',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=nguyen',
    content: 'Hôm nay là một ngày tuyệt vời! 🌞',
    image: 'https://source.unsplash.com/random/800x600?nature',
    likes: 120,
    comments: 15,
    shares: 5,
    time: '2 giờ trước',
    visibility: 'Công khai'
  },
  {
    id: 2,
    author: 'Trần Thị B',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=tran',
    content: 'Vừa hoàn thành dự án mới! Rất vui vì được làm việc với một team tuyệt vời 💪',
    likes: 89,
    comments: 8,
    shares: 2,
    time: '4 giờ trước',
    visibility: 'Bạn bè'
  },
  {
    id: 3,
    author: 'Lê Văn C',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=le',
    content: 'Cuối tuần này ai đi cafe không? ☕',
    image: 'https://source.unsplash.com/random/800x600?coffee',
    likes: 45,
    comments: 23,
    shares: 1,
    time: '6 giờ trước',
    visibility: 'Công khai'
  }
];

const Feed = () => {
  return (
    <div className="space-y-4">
      {/* Tạo bài viết mới */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?seed=current-user"
            alt="Ảnh đại diện"
            className="w-10 h-10 rounded-full"
          />
          <button className="flex-1 text-left px-4 py-2.5 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
            Bạn đang nghĩ gì?
          </button>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Video trực tiếp</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Ảnh/Video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Cảm xúc</span>
          </button>
        </div>
      </div>

      {/* Danh sách bài viết */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
