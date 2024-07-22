import './App.css';
import LoginSignup from './components/Login_Signup'; // Make sure this path is correct
import UserProfile from './components/UserProfile'; // Make sure this path is correct
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
