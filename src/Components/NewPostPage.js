import React, { useState } from 'react';

const NewPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Track which post is being edited

  const handleAddOrEditPost = () => {
    if (username.trim() && message.trim()) {
      if (editingIndex !== null) {
        // Edit existing post
        const updatedPosts = posts.map((post, index) =>
          index === editingIndex ? { ...post, username, message } : post
        );
        setPosts(updatedPosts);
        setEditingIndex(null); // Reset editing state
      } else {
        // Add new post
        const newPost = {
          username,
          message,
          timestamp: new Date().toLocaleString(),
        };
        setPosts([newPost, ...posts]);
      }
      setUsername('');
      setMessage('');
    } else {
      alert('Please fill in both the username and message.');
    }
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setUsername(post.username);
    setMessage(post.message);
    setEditingIndex(index);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="newpost-page">
      <h1>Blog Post Manager</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        ></textarea>
        <button onClick={handleAddOrEditPost} className="add-button">
          {editingIndex !== null ? 'Save Changes' : 'Add Post'}
        </button>
      </div>
      <div className="posts">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Be the first to add one!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              <p className="post-username">{post.username}</p>
              <p className="post-message">{post.message}</p>
              <p className="post-time">{post.timestamp}</p>
              <div className="post-actions">
                <button
                  onClick={() => handleEditPost(index)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewPostPage;
