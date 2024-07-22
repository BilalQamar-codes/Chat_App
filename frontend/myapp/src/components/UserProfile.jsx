import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  const sampleUser = user || {
    picture: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer at XYZ. Passionate about technology and open-source.'
  };

  return (
    <div className="profileContainer">
      <img className="profilePicture" src={sampleUser.picture} alt="Profile" />
      <div className="userDetails">
        <h2 className="userName">{sampleUser.name}</h2>
        <p className="userEmail">{sampleUser.email}</p>
        <p className="userBio">{sampleUser.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
