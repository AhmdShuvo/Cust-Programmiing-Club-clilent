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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Wait from './Pages/WaitForApproval/Wait';
import BlogDetail from './Pages/Blog/BlogDetails/BlogDetail';


function App() {
  return (
  <AuthProvider>
    <Router>
       <Navigation></Navigation>  
         <Routes>
              
         <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        {/* <Route path="Register" element={<Register />} />
        <Route
            path='blogs'
            element={
              <PrivateRoute>
                {' '}
                <Blog/>
              </PrivateRoute>
            }
          ></Route> */}
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/blog/:id" element={<BlogDetail />} />
        <Route path="notice" element={<Notice />} />
        <Route path="events" element={<Event />} />
        <Route path="/blogs/upload" element={<Upload />} />
              <Route path="Login" element={<Login />}/> 
              <Route path="approval" element={<Wait />}/> 
              <Route path="*" element={<NotFound />}/>
              
        </Routes>
       <Footer></Footer>
  
    </Router>
    </AuthProvider>
       
    
  );
}

export default App;
