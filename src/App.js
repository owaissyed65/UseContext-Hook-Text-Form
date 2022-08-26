import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Services from './Components/Services';
import State from './context/State';
import Alert from './Components/Alert';
function App() {

  return (
    <div>
      <State>
      <BrowserRouter>
      <Navbar/>
      <Alert />
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/contactus" element={<ContactUs/>}></Route>
      <Route exact path="/service" element={<Services/>}></Route>
      
    </Routes>
  </BrowserRouter>
      </State>
    </div>
  );
}

export default App;
