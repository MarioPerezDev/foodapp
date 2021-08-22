import './Meal.css'

function Meal(props) {

    function addNewItemToCart(item){
        props.addNewItemToCart(props.id)
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
                <button className="add-item" onClick={addNewItemToCart}>Add to cart</button>
            </div>
        </li>
    );
}

export default Meal;