import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="web-name">Flavourous</div>
                <div className="main-button unselectable" onClick={props.onCartClick}>
                    <div className="cart-word">
                        <AiOutlineShoppingCart className="cart-icon" />Cart
                    </div>
                    <div className="cart-items">
                        {props.totalItems}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;