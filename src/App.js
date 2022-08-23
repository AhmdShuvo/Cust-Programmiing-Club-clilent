import './App.css';


import Home from './Pages/Home/Home';

import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './Pages/Event/Event';

import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import Notice from './Pages/Notice/Notice';
import Upload from './Pages/Blog/UploadBlogs/Upload';

import Navigation from './Pages/Shared/Navbar/Navigation';

import Register from './Pages/LogIn/Register/Register';
import Login from './Pages/LogIn/LogIn/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
  
    <Router>
       <Navigation></Navigation>  
         <Routes>
              
              <Route index element={<Home />}/>
              <Route path="Login" element={<Login />}/> 
              <Route path="*" element={<NotFound />}/>
              
        </Routes>
       <Footer></Footer>
  
    </Router>
    
       
    
  );
}

export default App;
