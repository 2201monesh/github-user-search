import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function UserSearch() {

    const[username, setUsername] = useState('');

    const clickHandler = () => {
        fetch(`https://api.github.com/users/${username}`)
         .then(response => response.json())
         .then( data => console.log(data))
         .catch( error => console.error(error));

         setUsername("");
    }

    const handleTextChange = (e) => {
        setUsername(e.target.value);
    }

  return (
    <div className='user-search'>
     <div className="user-search-left">
      <RiSearchLine className='search-icon' />
      <input type="text" value={username} onChange={handleTextChange} className='search-text' placeholder='Search Github username...' />
     </div>  
     <div className="user-search-right">
        <button onClick={clickHandler}>Search</button>
     </div>
    </div>
  )
}

export default UserSearch
