import "./styles/styles.css"
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Frames from './components/Frames';
import Sunglasses from "./components/Sunglasses"
import Cart from "./components/Cart"
import Sale from "./components/Sale"
import Login from "./components/Login"
import Designer from "./components/Designer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path='/designer' element={<Designer/>}/>
          <Route path='/frames' element={<Frames/>}/>
          <Route path='/sunglasses' element={<Sunglasses/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;