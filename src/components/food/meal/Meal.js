import './Meal.css'

function Meal(props) {
    return (
        <li className="meal-container">
            <div className="meal-left">
                <img class="meal-image" alt="imagen de comida" src={props.img}></img>
                <div className="meal-info">
                    <div className="meal-name">{props.name}</div>
                    <p>{props.description}</p>
                    <p className="price-tag">{props.price} €</p>
                </div>
            </div>
            <div className="meal-right">
                <div className="add-item">Añadir</div>
            </div>
        </li>
    );
}

export default Meal;