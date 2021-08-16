import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="web-name">BuenSabor</div>
                <div className="cart-container">
                    <div className="cart-word"><AiOutlineShoppingCart className="cart-icon" />Carrito</div>
                    <div className="cart-items">0</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;