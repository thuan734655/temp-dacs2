import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showPost, setShowPost] = useState(false);

  const navigateToPost = (postId) => {
    setSelectedPostId(postId);
    setShowPost(true);
    // Scroll to post if it exists in the current feed
    const postElement = document.getElementById(`post-${postId}`);
    if (postElement) {
      postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight the post temporarily
      postElement.classList.add('highlight-post');
      setTimeout(() => {
        postElement.classList.remove('highlight-post');
      }, 2000);
    }
  };

  return (
    <PostContext.Provider value={{ selectedPostId, showPost, navigateToPost, setShowPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};
