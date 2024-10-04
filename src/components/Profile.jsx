import React,{useContext} from 'react'
import UseContext from '../context/UserContext'
const Profile = () => {

   const {user} = useContext(UseContext)

   if(!user) return <div>Please Login</div>

   return <div>
      WelCome :-{user.username}<br/>
      Password:-{user.password}<br/>   
      mobilNumber:-{user.mobileNum}
      
      </div>
}

export default Profile