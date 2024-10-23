import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';

// Page Components
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';

import axios from './services/interceptors'

import { getUser, removeToken } from './utils/auth';

const App = () => {
  const [user, setUser] = useState(getUser())

  const navigate = useNavigate()

  const handleSignOut = () => {
    removeToken()
    setUser(null)
    navigate('/signin')
  }

  useEffect(() => {
    const accessSecurePath = async () => {
      try {
        const res = await axios.get('/secure-path')
      } catch (err) {
        console.log(err)
      }
    }
    accessSecurePath()
  }, [])

  return (
    <>
      <NavBar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        { user 
          ? <Route path="/" element={<Dashboard user={user} />} />
          : <Route path="/" element={<Landing />} />
        }
      </Routes>
    </>
  )
}

export default App
