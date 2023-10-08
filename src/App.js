import { useState } from "react";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";

function App() {

  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setData(e);
  }

  console.log(data);

  return (
    <div className="main-section">
      <UserSearch onClick={handleClick} />
      <UserCard data={data} />
    </div>
  );
}

export default App;
