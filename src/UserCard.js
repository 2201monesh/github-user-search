import React from 'react'

function UserCard() {
  return (
    <div className='user-card'>
      <div className="avatar-img">Avatar image</div>
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

        <div className="socials"></div>
      </div>
    </div>
  )
}

export default UserCard
