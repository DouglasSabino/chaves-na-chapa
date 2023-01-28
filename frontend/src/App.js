import UpdateHamburger from './Pages/UpdateHamburger';
import UserRegister from './Pages/UserRegister';
import Login from './Pages/Login';
import ContextProvider from './context/contextProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/foods' element={<UpdateHamburger />} />
            <Route path='/user/register' element={<UserRegister />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
