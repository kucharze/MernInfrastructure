import LoginForm from "../../components/Loginform/Loginform"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import React, {useState} from 'react'

function Authpage({setUser}) {
  const [showLogin,setShowLogin] = useState(true)

  return (
    <main>
      <div>
        <button onClick={()=>{setShowLogin(!showLogin)}}>
          {showLogin? 'Sign up' : 'Login'}
          </button>
        {
          showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>
          
        }
        
      </div>
    </main>
  )
}

export default Authpage
