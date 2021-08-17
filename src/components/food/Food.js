import './Food.css'

import meals from '../../meals'
import Meal from './meal/Meal'

function Food() {
    return (
        <div className="app-content">
            <ul className="meals">
                {meals.map((meal) => <Meal name={meal.name} img={meal.img} price={meal.price} description={meal.description}></Meal>)}
            </ul>
        </div>
    );
}

export default Food;