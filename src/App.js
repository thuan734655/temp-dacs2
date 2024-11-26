import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import FriendSearch from './components/FriendSearch';
import FriendRequests from './components/FriendRequests';
import SuggestedFriends from './components/SuggestedFriends';
import { PostProvider } from './context/PostContext';

// Mock data
const mockSuggestions = [
  {
    id: 1,
    name: 'Nguyễn Thị Hương',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=huong',
    mutualFriends: 5,
    location: 'Hà Nội',
    occupation: 'Kỹ sư phần mềm tại FPT Software'
  },
  {
    id: 2,
    name: 'Trần Văn Nam',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=nam',
    mutualFriends: 3,
    location: 'TP.HCM',
    occupation: 'UI/UX Designer tại Tiki'
  },
  {
    id: 3,
    name: 'Lê Thị Mai',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=mai',
    mutualFriends: 8,
    location: 'Đà Nẵng',
    occupation: 'Marketing Manager tại Shopee'
  },
  {
    id: 4,
    name: 'Phạm Minh Đức',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=duc',
    mutualFriends: 12,
    location: 'Hải Phòng',
    occupation: 'Data Scientist tại VNG'
  }
];

const mockRequests = [
  {
    id: 1,
    name: 'Hoàng Văn An',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=an',
    mutualFriends: 15,
    time: '2 ngày'
  },
  {
    id: 2,
    name: 'Đỗ Thu Trang',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=trang',
    mutualFriends: 8,
    time: '5 ngày'
  },
  {
    id: 3,
    name: 'Vũ Quang Huy',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=huy',
    mutualFriends: 23,
    time: '1 tuần'
  }
];

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [currentView, setCurrentView] = useState('feed'); // 'feed' | 'friends'

  const handleSearch = (searchParams) => {
    console.log('Search:', searchParams);
    // Implement search logic here
  };

  return (
    <PostProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar onMenuClick={() => setShowMobileSidebar(true)} />

        {/* Main Container */}
        <div className="max-w-[1440px] mx-auto px-4 py-6 mt-16">
          <div className="flex gap-6">
            {/* Left Sidebar - Hidden on mobile */}
            <div className="hidden lg:block w-[280px] flex-shrink-0 sticky top-[76px]">
              <Sidebar
                currentView={currentView}
                onViewChange={setCurrentView}
              />
            </div>

            {/* Mobile Sidebar - Overlay */}
            {showMobileSidebar && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setShowMobileSidebar(false)}
                />
                <div className="fixed inset-y-0 left-0 w-[280px] bg-white z-50 lg:hidden overflow-y-auto">
                  <Sidebar
                    currentView={currentView}
                    onViewChange={(view) => {
                      setCurrentView(view);
                      setShowMobileSidebar(false);
                    }}
                  />
                </div>
              </>
            )}

            {/* Main Content */}
            <div className="flex-1 max-w-[680px]">
              {currentView === 'feed' ? (
                <Feed />
              ) : (
                <div className="space-y-6">
                  <FriendSearch onSearch={handleSearch} />
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-6">
                      <FriendRequests requests={mockRequests} />
                    </div>
                    <div className="space-y-6">
                      <SuggestedFriends suggestions={mockSuggestions} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Hidden on mobile and tablet */}
            <div className="hidden xl:block w-[320px] flex-shrink-0 sticky top-[76px]">
              {currentView === 'feed' ? (
                <div className="space-y-6">
                  <FriendRequests requests={mockRequests.slice(0, 2)} />
                  <SuggestedFriends suggestions={mockSuggestions.slice(0, 2)} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
