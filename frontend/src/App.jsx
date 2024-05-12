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
import Signup from "./components/Signup";
import { createContext , useState} from "react";
import CheckOutForm from "./components/CheckOutForm";
import MyOrders from "./components/MyOrders";

export const context = createContext({
  cartItems: [],
  setCartItems: ()=>{}
})

function App() {

  const [cartItems,setCartItems] = useState([])

  return (
    <div className="App">
      <context.Provider value={{cartItems,setCartItems}}>
        <Router>
          <Header/>
          <Routes>

            <Route path='/designer' element={<Designer/>}/>
            <Route path='/frames' element={<Frames/>}/>
            <Route path='/sunglasses' element={<Sunglasses/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/checkout" element={<CheckOutForm/>} />
            <Route path="/myorders" element={<MyOrders/>} />
          </Routes>
          <Footer/>

        </Router>
      </context.Provider>
    </div>
  );
}

export default App;