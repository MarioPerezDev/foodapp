import './PaymentForm.css'
import React from 'react';

function OrderItem(props) {


    return (
        <React.Fragment>
            <div className="order-item">
                <div className="order-item-left">
                    <img className="cart-item-img" src={props.img} alt="cart item"></img>
                </div>
                <div className="order-item-right">
                    <p className="order-itemname">{props.name}</p>
                    <p className="order-units">x{props.units}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OrderItem;