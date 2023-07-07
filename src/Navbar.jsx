import { Link } from "react-router-dom";
import TLogo from "./assets/twiddler-logo.png";

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
                <Link to="/login" className="nav-link">Log In</Link>
                <Link to="/register" className="nav-link">Register</Link>
            </div>
                <Link to="/" className="navbar-brand brand-name">
                <img className="logo" src={TLogo} id="logo" alt="twiddler logo" />Twiddler</Link>
            <div className="navbar-nav">
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/cart" className="nav-link"><span className="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </div>
    </nav>
    );
}