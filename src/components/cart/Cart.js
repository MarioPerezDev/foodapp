import './Cart.css'
import CartItem from './CartItem';
import Modal from '../modal/Modal';
import { useState } from 'react';

function Cart(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);


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
    
    function handlePayment(){
        setIsModalOpen(true)
    }
    function closeModalHandler(){
        setIsModalOpen(false)
    }

    return (
        <div className="cart-items-container">
            <Modal isOpen={isModalOpen} onClose={closeModalHandler} header={"Rellene con sus datos personales"} footer={`Total a pagar: ${totalAmmount}€`}>
                <form className="personal-data-form">
                    <label>Nombre</label>
                    <input type="text"></input>
                    <label>Primer Apellido</label>
                    <input type="text"></input>
                    <label>Segundo Apellido</label>
                    <input type="text"></input>
                    <label>Correo Electrónico</label>
                    <input type="text"></input>
                    <label>Dirección</label>
                    <input type="text"></input>
                </form>
            </Modal>
            {existingItems ? (props.cartItems.map((cartItem)=>{
                return <CartItem 
                name={cartItem.name}
                img={cartItem.img} 
                price={cartItem.price} 
                units={cartItem.units} 
                id={cartItem.id}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}></CartItem>
            })) : <p>The cart is empty. </p>}
            {existingItems && <div className="total-price">
                <span className="total-price-tag">{totalAmmount > 0 && totalAmmount}€</span>
                <span className="button-confirm unselectable" onClick={handlePayment}>Pagar</span>
            </div>}
        </div>
    );
}

export default Cart;