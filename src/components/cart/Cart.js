import './Cart.css'
import CartItem from './CartItem';

function Cart(props) {
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
            <div className="total-price">
                <span class="total-price-tag">{totalAmmount > 0 && totalAmmount}€</span>
                <span class="total-price-confirm">Pagar</span>
            </div>
        </div>
    );
}

export default Cart;