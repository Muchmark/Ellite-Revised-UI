import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'

//Components
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
