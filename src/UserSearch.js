import { RiSearchLine } from 'react-icons/ri';

function UserSearch() {
  return (
    <div className='user-search'>
     <div className="user-search-left">
      <RiSearchLine className='search-icon' />
      <input type="text" className='search-text' placeholder='Search Github username...' />
     </div>  
     <div className="user-search-right">
        <button>Search</button>
     </div>
    </div>
  )
}

export default UserSearch
