import './Food.css'

import meals from '../../meals'
import Meal from './meal/Meal'

function Food(props) {
    function addNewItemToCart(id){
        props.addNewItemToCart(id)
    }
    return (
        <div className="app-content">
            <ul className="meals">
                {meals.map((meal) => <Meal 
                name={meal.name} 
                img={meal.img} 
                price={meal.price} 
                description={meal.description} 
                id={meal.id}
                addNewItemToCart={addNewItemToCart}></Meal>)}
            </ul>
        </div>
    );
}

export default Food;