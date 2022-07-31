import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navbar/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Notice from './Pages/Notice/Notice';

function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/notice" element={<Notice />} />
    
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
