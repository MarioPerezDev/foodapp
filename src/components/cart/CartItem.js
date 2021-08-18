import './Cart.css'
import React from 'react';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

function CartItem(props) {
    function handleAddItem(){
        props.onAddItem(props.id);
    }

    function handleRemoveItem(){
        props.onRemoveItem(props.id);
    }

    return (
        <div className="cart-item">
           <div className="cart-left">
               <img className="cart-item-img" src={props.img} alt="cart item"></img>
               <p>{props.name}</p>
               <p>{props.price}€</p>

           </div>
           <div className="cart-right">
               <div className="cart-units-container">
                    <AiFillMinusSquare onClick={handleRemoveItem} className="unit-icon" />
                    {props.units}
                    <AiFillPlusSquare onClick={handleAddItem} className="unit-icon" />                   
               </div>          
           </div>
        </div>
    );
}

export default CartItem;