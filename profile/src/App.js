import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import {Home} from './view/home'
import { About } from './view/about';
import { Skills } from './view/skills';
import { Education } from './education';
import { Certificate } from './view/certificate';

function App() {
  return (
    
          <>
          <div>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Education" element={<Education/>}></Route>
              <Route path="/Skills" element={<Skills/>}></Route>
              <Route path="/Certification" element={<Certificate/>}></Route>
            </Routes>
            </BrowserRouter>
          </div>
          </>
  );
}

export default App;
