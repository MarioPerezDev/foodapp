import './Cart.css'
import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

function CartItem(props) {
    function handleAddItem(){
        props.onAddItem(props.id);
    }

    function handleRemoveItem(){
        props.onRemoveItem(props.id);
    }

    return (
        <React.Fragment>
            <div className="cart-item">
            <div className="cart-left-first">
                <img className="cart-item-img" src={props.img} alt="cart item"></img>
                <p className="item-units">x{props.units}</p>
            </div>
            <div className="cart-left-second">
                <p>{props.name}</p>
                <p>{props.price}€</p>
            </div>
            <div className="cart-right">
                <div className="cart-units-container">
                        <AiFillMinusCircle onClick={handleRemoveItem} className="unit-icon unselectable" />                 
                        <AiFillPlusCircle onClick={handleAddItem} className="unit-icon unselectable" />                   
                </div>          
            </div>
            </div>
        </React.Fragment>
    );
}

export default CartItem;