import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/login' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
    </Router>
    {/*NavBar*/}
    </>
  );
}

export default App;
