import './Cart.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

function Cart(props) {
    const context = useContext(CartContext);
    //Necesito hacer una funcion con un filter o un reduce para obtener el numero de items de cada tipo

    return (
        <div className="cart-items-container">
            ¡Este es el carrito! Todavía me falta mucho...
            {context.cartItems.map((cartItem)=>{
                return <CartItem name={cartItem.name} img={cartItem.img} price={cartItem.price}></CartItem>
            })}
        </div>
    );
}

export default Cart;