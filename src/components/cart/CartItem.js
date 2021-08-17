import './Cart.css'
import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';

function CartItem(props) {
    return (
        <div className="cart-item">
           <div className="cart-left">
               <img className="cart-item-img" src={props.img} alt="cart item"></img>
               <p>{props.name}</p>
           </div>
           <div className="cart-right">
               {props.price}
           </div>
        </div>
    );
}

export default CartItem;