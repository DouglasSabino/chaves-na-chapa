import UpdateHamburger from './Pages/UpdateHamburger';
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
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
