import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navbar/Navigation';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route index element={<Home />} />
    
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
