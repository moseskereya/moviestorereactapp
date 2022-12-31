import { Route, Routes } from 'react-router-dom';
import './App.css'
import { AuthContextProvider } from './Components/context/AuthContext';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import Home from './Components/pages/Home';

function App() {
  return (
      <>
        <AuthContextProvider>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>} />
          </Routes>
             <Footer />
        </AuthContextProvider>
    </>
  );
}

export default App;
