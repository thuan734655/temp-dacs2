// Mock data cho người dùng
export const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    username: "@nguyenvana",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=nguyen",
    bio: "Lập trình viên | Yêu thích công nghệ",
    followers: 1234,
    following: 567,
    isOnline: true
  },
  {
    id: 2,
    name: "Trần Thị B",
    username: "@tranthib",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=tran",
    bio: "Nhà thiết kế đồ họa | Thích sáng tạo",
    followers: 890,
    following: 432,
    isOnline: false
  },
  {
    id: 3,
    name: "Lê Văn C",
    username: "@levanc",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=le",
    bio: "Marketing Specialist | Coffee lover",
    followers: 567,
    following: 234,
    isOnline: true
  }
];

// Mock data cho yêu cầu kết bạn
export const friendRequests = [
  {
    id: 1,
    sender: {
      id: 4,
      name: "Phạm Văn D",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=pham",
    },
    time: "2 giờ trước",
    status: "pending"
  },
  {
    id: 2,
    sender: {
      id: 5,
      name: "Hoàng Thị E",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=hoang",
    },
    time: "1 ngày trước",
    status: "pending"
  }
];

// Mock data cho người dùng được đề xuất
export const suggestedFriends = [
  {
    id: 6,
    name: "Vũ Văn F",
    username: "@vuvanf",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=vu",
    bio: "Nhiếp ảnh gia | Travel blogger",
    mutualFriends: 12
  },
  {
    id: 7,
    name: "Đặng Thị G",
    username: "@dangthig",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=dang",
    bio: "Giáo viên tiếng Anh | Love teaching",
    mutualFriends: 8
  }
];

// Mock data cho bài viết
export const posts = [
  {
    id: 1,
    author: "Nguyễn Văn A",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=nguyen",
    content: "Hôm nay là một ngày tuyệt vời! ",
    image: "https://source.unsplash.com/random/800x600?nature",
    likes: 120,
    comments: [
      {
        id: 1,
        author: "Trần Thị B",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=tran",
        content: "Thật tuyệt vời! ",
        time: "30 phút trước"
      },
      {
        id: 2,
        author: "Lê Văn C",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=le",
        content: "Chúc mừng bạn nhé!",
        time: "15 phút trước"
      }
    ],
    shares: 5,
    time: "2 giờ trước",
    visibility: "Công khai"
  },
  {
    id: 2,
    author: "Trần Thị B",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=tran",
    content: "Vừa hoàn thành dự án mới! Rất vui vì được làm việc với một team tuyệt vời ",
    likes: 89,
    comments: [
      {
        id: 3,
        author: "Phạm Văn D",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=pham",
        content: "Chúc mừng team nhé! ",
        time: "1 giờ trước"
      }
    ],
    shares: 2,
    time: "4 giờ trước",
    visibility: "Bạn bè"
  }
];

// Mock data cho câu chuyện
export const stories = [
  {
    id: 1,
    userId: 1,
    image: "https://source.unsplash.com/random/800x600?story1",
    time: "2 giờ trước"
  },
  {
    id: 2,
    userId: 2,
    image: "https://source.unsplash.com/random/800x600?story2",
    time: "4 giờ trước"
  }
];

// Mock data cho thông báo
export const notifications = [
  {
    id: 1,
    type: "like",
    actor: {
      name: "Trần Thị B",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=tran"
    },
    target: {
      type: "post",
      id: 1,
      preview: "Hôm nay là một ngày tuyệt vời! "
    },
    time: "30 phút trước",
    isRead: false
  },
  {
    id: 2,
    type: "comment",
    actor: {
      name: "Lê Văn C",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=le"
    },
    target: {
      type: "post",
      id: 1,
      preview: "Hôm nay là một ngày tuyệt vời! "
    },
    time: "1 giờ trước",
    isRead: false
  },
  {
    id: 3,
    type: "share",
    actor: {
      name: "Phạm Văn D",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=pham"
    },
    target: {
      type: "post",
      id: 2,
      preview: "Vừa hoàn thành dự án mới!"
    },
    time: "2 giờ trước",
    isRead: true
  },
  {
    id: 4,
    type: "friend_request",
    actor: {
      name: "Hoàng Thị E",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=hoang"
    },
    time: "1 ngày trước",
    isRead: true
  }
];
