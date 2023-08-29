import React from 'react'
import { Link } from 'react-router-dom'
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';

function Navbar({user,setUser}) {

  const logout = () =>{
    userService.logOut()

    setUser(null)
  }
  return (
    <nav className='nav'>
      <Link to="/orders">Order History</Link>
      {/* &nbsp No break spacing creates a space that cannot be pushed onto another line by word wrap */}
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      {
        user && <span>Welcome {user}</span>
      }
      &nbsp;&nbsp;<Link to="" onClick={logout}>Log Out</Link>
    </nav>
  )
}

export default Navbar
