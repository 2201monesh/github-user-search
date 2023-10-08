import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function UserSearch({onClick}) {

    const[username, setUsername] = useState('');
    const [data, setData] = useState([]);

    const clickHandler = () => {
        fetch(`https://api.github.com/users/${username}`)
         .then(response => response.json())
         .then( data => setData(data))
         .catch( error => console.error(error));

         setUsername("");
        //  console.log(data);
         onClick(data);
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
