import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="web-name">Flavourous</div>
                <div className="cart-container" onClick={props.onCartClick}>
                    <div className="cart-word">
                        <AiOutlineShoppingCart className="cart-icon" />Cart
                    </div>
                    <div className="cart-items">
                        0
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;