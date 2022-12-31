import { Route, Routes } from 'react-router-dom';
import './App.css'
import { AuthContextProvider } from './Components/context/AuthContext';
import Navbar from "./Components/Navbar";
import Account from './Components/pages/Account';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import ProtectedRoute from './Components/pages/ProtectedRoute';
import Signup from './Components/pages/Signup';

function App() {
  return (
      <>
        <AuthContextProvider>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
                  <Route path='/account' element={
                      <ProtectedRoute>
                      <Account/>
                      </ProtectedRoute>}
                  />     
          </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;
