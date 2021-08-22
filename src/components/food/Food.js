import './Food.css'
import Meal from './meal/Meal'

function Food(props) {
    function addNewItemToCart(id){
        props.addNewItemToCart(id)
    }

    let content = props.meals.length > 0 ? props.meals.map((meal) => <Meal 
    name={meal.name} 
    img={meal.img} 
    price={meal.price} 
    description={meal.description} 
    id={meal.id}
    key={Math.round(Math.random()*1000000000)}
    addNewItemToCart={addNewItemToCart}></Meal>) : <p className="header-text">El contenido está cargando...</p>
    return (
        <div className="app-content">
            <ul className="meals">
                {content}
            </ul>
        </div>
    );
}

export default Food;