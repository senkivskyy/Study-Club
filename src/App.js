import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'


import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
import Home from './Pages/Home'

import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
        <nav className = 'nav'>
          <Link to='/'>Home</Link>
          <Link to='/settings'>Settings</Link>
          <Link to ='/profile'>Profile</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

    </div>
  );
}

export default App;