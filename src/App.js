import './App.css';
import Navbar from './components/navbar/Navbar'
import AppContent from './components/appcontent/AppContent'
import Cart from './components/cart/Cart'
import { useEffect, useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() =>{
    fetch("https://foodapp-e29dc-default-rtdb.europe-west1.firebasedatabase.app/data.json")
    .then(response => response.json())
    .then(data => setMeals(data))
    .catch(error => console.log(error))
  }, [])

  function handleAddNewItemToCart(itemId){
    let mealsInCart = [...cartItems];
    let existingMeal = mealsInCart.filter((meal)=> meal.id === itemId)[0]
    if(existingMeal){
      let indexOfMeal = mealsInCart.indexOf(existingMeal)
     mealsInCart[indexOfMeal].units += 1;
    } else {
      let newCartItem = meals.filter((meal)=> meal.id === itemId)[0];
      newCartItem.units = 1;
      mealsInCart.push(newCartItem);
    }
    setCartItems((previousItems) => mealsInCart);
    setCartOpen(true);
  }

  function handleRemoveItemOfCart(itemId){
    let mealsInCart = [...cartItems];
    let existingMeal = mealsInCart.filter((meal)=> meal.id === itemId)[0]
    if(existingMeal.units > 1){
      existingMeal.units -= 1;
    } else if (existingMeal.units === 1){
      let indexOfMeal = mealsInCart.indexOf(existingMeal)
      mealsInCart.splice(indexOfMeal,1);
    }
     setCartItems((previousItems) => mealsInCart);
     if(mealsInCart.length === 0) setCartOpen(false);
  }
  
  function handleOpenOrCloseCart(e){
    setCartOpen(!isCartOpen);
  }
  function handleResetCart(){
    setCartOpen(false);
    setCartItems((previousItems) => [])
  }


let totalItems = cartItems.length > 0 ? (cartItems.reduce((accumulator, currentItem)=> {
  return accumulator + currentItem.units;
},0)) : 0;


  return (
      <div className="App">
        <Navbar onCartClick={handleOpenOrCloseCart} totalItems={totalItems}/>
        {isCartOpen && <Cart cartItems={cartItems} onAddItemToCart={handleAddNewItemToCart} onRemoveItemOfCart={handleRemoveItemOfCart} onResetCart={handleResetCart}></Cart>}
        <AppContent meals={meals} onAddItemToCart={handleAddNewItemToCart}/>
      </div>
  );
}

export default App;
