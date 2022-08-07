import logo from './logo.svg';
import './App.css';


import Home from './Pages/Home/Home';

import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Event from './Pages/Event/Event';

import NotFound from './Pages/NotFound/NotFound';

import Navigation from './Pages/Shared/Navbar/Navigation';

import Register from './Pages/LogIn/Register/Register';
import Login from './Pages/LogIn/LogIn/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navigation></Navigation>
         <Routes>
            <Route index element={<Home />}/>
              <Route path="Register" element={<Register />}/> 
              
              <Route path="login" element={<Login/>}/>
              <Route path="*" element={<NotFound />}/>
              
        </Routes>
       <Footer></Footer>
  
    </Router>
    
    </AuthProvider>   
    
  );
}

export default App;
