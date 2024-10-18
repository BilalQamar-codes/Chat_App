import './App.css';
import LoginSignup from './pages/Login_Signup'; // Make sure this path is correct
import UserProfile from './pages/UserProfile'; // Make sure this path is correct
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatList from './pages/ChatList';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/chatlist' element= {<ChatList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
