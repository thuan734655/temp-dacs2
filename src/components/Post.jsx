import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post?.likes || 0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(Array.isArray(post?.comments) ? post.comments : []);

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      console.log('Tạo thông báo: Bạn đã thích bài viết');
    } else {
      setLikes(prev => prev - 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'Người dùng hiện tại',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=current-user',
        content: newComment,
        time: 'Vừa xong'
      };
      setComments(prev => [...prev, comment]);
      console.log('Tạo thông báo: Bạn đã bình luận về bài viết');
      setNewComment('');
    }
  };

  const handleShare = () => {
    console.log('Tạo thông báo: Bạn đã chia sẻ bài viết');
  };

  if (!post) return null;

  return (
    <div 
      id={`post-${post.id}`}
      className="bg-white rounded-lg shadow-md mb-4 transition-all duration-300"
    >
      <div className="p-4 flex items-center">
        <img
          src={post.avatar || `https://api.dicebear.com/6.x/avataaars/svg?seed=${post.id}`}
          alt={post.author || 'User'}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-semibold">{post.author || 'Người dùng'}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{post.time || 'Vừa xong'}</span>
            <span className="mx-1">•</span>
            <span>{post.visibility || 'Công khai'}</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-gray-800">{post.content}</p>
      </div>

      {post.image && (
        <div className="relative">
          <img
            src={post.image}
            alt="Post content"
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      )}

      <div className="px-4 py-2 flex items-center text-gray-500 text-sm border-b">
        <div className="flex items-center">
          <FaThumbsUp className="text-blue-500" />
          <span className="ml-2">{likes}</span>
        </div>
        <div className="ml-4">
          {comments.length} bình luận
        </div>
        <div className="ml-4">
          {post.shares || 0} chia sẻ
        </div>
      </div>

      <div className="px-4 py-2 flex justify-between border-b">
        <button
          className={`flex items-center justify-center flex-1 py-2 hover:bg-gray-100 rounded-lg ${
            liked ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={handleLike}
        >
          <FaThumbsUp className="mr-2" />
          Thích
        </button>
        <button
          className="flex items-center justify-center flex-1 py-2 hover:bg-gray-100 rounded-lg text-gray-500"
          onClick={() => setShowComments(!showComments)}
        >
          <FaComment className="mr-2" />
          Bình luận
        </button>
        <button
          className="flex items-center justify-center flex-1 py-2 hover:bg-gray-100 rounded-lg text-gray-500"
          onClick={handleShare}
        >
          <FaShare className="mr-2" />
          Chia sẻ
        </button>
      </div>

      {showComments && (
        <div className="p-4">
          <form onSubmit={handleComment} className="mb-4">
            <div className="flex">
              <img
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=current-user"
                alt="Current user"
                className="w-8 h-8 rounded-full"
              />
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Viết bình luận..."
                className="ml-2 flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex">
                <img
                  src={comment.avatar || `https://api.dicebear.com/6.x/avataaars/svg?seed=${comment.id}`}
                  alt={comment.author || 'User'}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2 flex-1">
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <p className="font-semibold">{comment.author || 'Người dùng'}</p>
                    <p>{comment.content}</p>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {comment.time || 'Vừa xong'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
