import './App.css';
import Navbar from './components/navbar/Navbar'
import AppContent from './components/appcontent/AppContent'
import Cart from './components/cart/Cart'
import { useState } from 'react';
import CartContext from './store/cart-context';
import meals from './meals';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  function addCartItemHandler(itemId){
    let newCartItem = meals.filter((meal)=> meal.id === itemId)
    setCartItems((previousItems) => [...previousItems, newCartItem[0]])
  }

  function handleOpenOrCloseCart(e){
    setCartOpen(!isCartOpen);
  }
  return (
    <CartContext.Provider
    value={
      {
        cartItems: cartItems,
        handleAddItem : addCartItemHandler,
        isCartOpen : false
      }
    }>
      <div className="App">
        <Navbar onCartClick={handleOpenOrCloseCart}/>
        {isCartOpen && <Cart></Cart>}
        <AppContent meals={meals}/>
      </div>
    </CartContext.Provider>
  );
}

export default App;
