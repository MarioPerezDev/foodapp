import './Meal.css'
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

function Meal(props) {
    const context = useContext(CartContext);

    function addNewItemToCart(item){
        context.handleAddItem(props.id)
    }

    return (
        <li className="meal-container" id={props.id}>
            <div className="meal-left">
                <img className="meal-image" alt="imagen de comida" src={props.img}></img>
                <div className="meal-info">
                    <div className="meal-name">{props.name}</div>
                    <p>{props.description}</p>
                    <p className="price-tag">{props.price} €</p>
                </div>
            </div>
            <div className="meal-right">
                <button className="add-item" onClick={addNewItemToCart}>Añadir</button>
            </div>
        </li>
    );
}

export default Meal;