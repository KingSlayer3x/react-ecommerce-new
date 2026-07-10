
import './App.css'
// import SignUpForm from '../components/SignUpForm';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import ProfilePage from '../components/ProfilePage';
import LoginPage from '../components/LoginPage';
import { AuthContext } from './assets/AuthContext';
import { useState } from 'react';
function App() {
    const [user, setUser] = useState({name: "", isAuth: false});
    function login(name){
      setUser({name: name, isAuth: true})
    }
    function logout(){
      setUser({name: "", isAuth: false});
    }
  return (
    <div>
      {/* <SignUpForm /> */}
      <AuthContext.Provider value={{ user,login, logout }}>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<h1 style={{padding: "1rem"}}>404 Not Found</h1>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
