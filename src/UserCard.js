import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';

function UserCard({data}) {
  return (
    <div className='user-card'>
      <div className="avatar-img"><img className='profile-image' src={data.avatar_url} alt="image" /></div>
      <div className="info-section">
        <div className="info-section-heading">
          {data.name ? <p className='fullname'>{data.name}</p> : <p className='fullname'>Full Name</p>}
          {/* <p>Joined date</p> */}
        </div>
        {data.login ? <a href={`https://github.com/${data.html_url}`} className='username'>{data.login}</a> : <a className='username'>Login Name</a>}
        {/* {data.login ? <p className='username'>{data.login}</p> : <a className='username'>Login Name</a>} */}
        {data.bio ? <p className='bio'>{data.bio}</p> : <p className='bio'>This id has no bio.</p>}

        <div className="follower-box">
          <div className="repos">
            <p>Repos</p>
            {data.public_repos ? <p className='count'>{data.public_repos}</p> : <p className='count'>0</p>}
          </div>
          <div className="followers">
            <p>followers</p>
            {data.followers ? <p className='count'>{data.followers}</p> : <p className='count'>0</p>}
          </div>
          <div className="following">
            <p>following</p>
            {data.following ? <p className='count'>{data.following}</p> : <p className='count'>0</p>}
          </div>
        </div>

        <div className="socials">
          <div className="social-1">
            <FaXTwitter className="social-1-logo" />
            {data.twitter_username ? <a href={`https://twitter.com/${data.twitter_username}`} className='social-text'>{data.twitter_username}</a> :<a className='social-text'>Twitter username</a>}
          </div>
          <div className="social-2">
            <FaLocationDot className="social-2-logo" />
            {data.location ? <p className='social-text'>{data.location}</p> : <p className='social-text'>Location</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
