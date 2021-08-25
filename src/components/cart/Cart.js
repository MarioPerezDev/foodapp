import './Cart.css'
import CartItem from './CartItem';
import Modal from '../modal/Modal';
import { useState } from 'react';
import PaymentForm from '../paymentform/PaymentForm';

function Cart(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModalHandler(){
        setIsModalOpen(true)
    }
    function closeModalHandler(e){
        setIsModalOpen(false)
    }

    function handleAddItem(id){
        props.onAddItemToCart(id);
    }

    function handleRemoveItem(id){
        props.onRemoveItemOfCart(id);
    }

    let existingItems = (props.cartItems.length > 0);
    let totalAmmount = (Math.round(props.cartItems.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.units * currentItem.price);
    },0) * 100) / 100).toFixed(2)
    



    return (
        <div className="cart-items-container">
            <Modal isOpen={isModalOpen} onClose={closeModalHandler} header={"Fill in with your personal data"} footer={`Total a pagar: ${totalAmmount}€`}>
                <PaymentForm onClose={closeModalHandler} orderItems={props.cartItems} onResetCart={props.onResetCart}></PaymentForm>
            </Modal>
            {existingItems ? (props.cartItems.map((cartItem)=>{
                return <CartItem 
                name={cartItem.name}
                img={cartItem.img} 
                price={cartItem.price} 
                units={cartItem.units} 
                id={cartItem.id}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                onCloseModal={closeModalHandler}></CartItem>
            })) : <p>The cart is empty. </p>}
            {existingItems && <div className="total-price">
                <span className="total-price-tag">{totalAmmount > 0 && totalAmmount}€</span>
                <span className="button-confirm unselectable" onClick={openModalHandler}>Checkout</span>
            </div>}
        </div>
    );
}

export default Cart;