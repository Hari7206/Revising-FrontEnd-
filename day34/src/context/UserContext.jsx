import React, { createContext } from 'react'


export const UserContextData = createContext()
function UserContext({children}) {
    const users = [
  {
    id: 1,
    name: "Hari"
  },
  {
    id: 2,
    name: "Ram"
  },
  {
    id: 3,
    name: "Shyam"
  }
];
  return (
   <UserContextData.Provider  value={users}>
        {children}
   </UserContextData.Provider>
  )
}

export default UserContext