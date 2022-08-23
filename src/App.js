import './App.css';

import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navbar/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Event from './Pages/Event/Event';
import Login from './Pages/LogIn/LogIn/Login';
// import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import Notice from './Pages/Notice/Notice';
import About from './Pages/About/About';
// import NoticeModal from './Pages/Notice/NoticeModal';
// import TextEditor from './Pages/TextEditor/TextEditor';

function App() {
  return (

    <Router>
      <Navigation></Navigation>
      <Routes>

        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="notice" element={<Notice />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/notice/:noticeId" element={<NoticeModal />} /> */}
        {/* <Route path="texteditor" element={<TextEditor />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}


      </Routes>
      <Footer></Footer>

    </Router>
  )
}

export default App;
