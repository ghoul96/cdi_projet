import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      
      {user && (
        <div className="profile-info">
          <div className="profile-card">
            <div className="profile-avatar">
              {user.name.split(' ').map(word => word[0]).join('').toUpperCase()}
            </div>
            <div className="profile-details">
              <h2>{user.name}</h2>
              <p className="email">{user.email}</p>
              {user.bio && <p className="bio">{user.bio}</p>}
              <p className="member-since">
                Member since: {new Date(user.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="profile-actions">
            <h3>Account Actions</h3>
            <button className="action-btn">Edit Profile</button>
            <button className="action-btn">Change Password</button>
            <button className="action-btn">View My Posts</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;