import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import NotFound from './components/NotFound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

//BrowserRouter ตัวควบคุมเส้นทาง
//Routes ตัวผูก url ผูก path
//Route ตัว path ผูก component
function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/blog' element={<Blog />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
