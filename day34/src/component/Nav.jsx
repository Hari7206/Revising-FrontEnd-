import React, { useContext } from 'react'
import { UserContextData } from '../context/UserContext'

function Nav() {
  const data = useContext(UserContextData);

  return (
    <div className='bg-red-300 p-10 text-[3rem]'>
      Nav
      {data.map((user) => (
     <div>
          <h1 key={user.id}>{user.name}
        </h1>
       <p>
        {user.id}
       </p>
     </div>
      ))}
    </div>
  );
}
export default Nav