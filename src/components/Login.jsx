import React, { useState, useContext } from 'react';
import UseContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNum, setMobileNum] = useState('')

  const { setUser } = useContext(UseContext)

  const handilSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password,mobileNum })
  }
  return (
    <>
      <div>
        <h2>Login</h2>
        
          <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='UserName' className='outline-none border p-1 border-dark mx-2 rounded' />
            <input type="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none border p-1 border-dark mx-2 rounded' />
            <input type="number" placeholder='Mobile Number' value={mobileNum} onChange={(e) => setMobileNum(e.target.value)} className='outline-none border p-1 border-dark mx-2 rounded' />
          </div>
          
          <div>
          
          <button onClick={handilSubmit} className='my-4 border bg-orange-700 px-2 py-1 text-lg rounded-lg text-white'>Submit</button>

        </div>
      </div>
    </>
  )
}

export default Login