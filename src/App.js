import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Comments from "./pages/Comments";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import { useState } from "react";
const App = () => {
  let initialValue = localStorage.getItem("product")
  if(!initialValue){
     initialValue = JSON.stringify([])
     localStorage.setItem("product",initialValue)
  }
const [cart, setCart] = useState(JSON.parse(initialValue))

function createElementToBasket(el) {
  const findedObj = cart.filter(e => e.id === el.id)
  const findObjectArr = cart.map((ob)=>{if(ob.id === el.id){
    ob.count = ob.count? ob.count + 1 : 1 
  }
  return ob
})
let newCart

if(findedObj[0]){
  newCart = [...findObjectArr]
} else {
  el.count = el.count? el.count + 1 : 1 
  newCart = [...findObjectArr, el]
}
  setCart(newCart)
  localStorage.setItem('product', JSON.stringify(newCart))
}
const removeCart = () =>{
  setCart([])
}
localStorage.setItem("",JSON.stringify([]))

  return (
    <>
<Router>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Cart" element={<Cart cart = {cart} setCart = {setCart} removeCart = {removeCart}/>}/>
<Route path="/Comments" element={<Comments/>}/>
<Route path="/Shop" element={<Shop createElementToBasket ={createElementToBasket} cart = {cart}/>}/>
  </Routes>
<Footer/>
</Router>
    </>
  );
}

export default App;
