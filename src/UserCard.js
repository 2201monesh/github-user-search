import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';

function UserCard({data}) {
  return (
    <div className='user-card'>
      <div className="avatar-img"><img className='profile-image' src={data.avatar_url} alt="image" /></div>
      <div className="info-section">
        <div className="info-section-heading">
          <p className='fullname'>Full Name</p>
          <p>Joined date</p>
        </div>
        <p className='username'>Username</p>
        <p className='bio'>Bio</p>

        <div className="follower-box">
          <div className="repos">
            <p>Repos</p>
            <p>0</p>
          </div>
          <div className="followers">
            <p>followers</p>
            <p>100</p>
          </div>
          <div className="following">
            <p>following</p>
            <p>100</p>
          </div>
        </div>

        <div className="socials">
          <div className="social-1">
            <FaXTwitter className="social-1-logo" />
            <p className='social-text'>text</p>
          </div>
          <div className="social-2">
            <FaLocationDot className="social-2-logo" />
            <p className='social-text'>text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
