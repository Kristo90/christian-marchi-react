import React , {useContext} from "react";
// Importo la imagen del logo
import Warehouse from "../../images/Warehouse.png";
// Importo mi estilo
import '../../Styles/styles.css';
// Importo Router Dom
import { Link } from "react-router-dom";

import { DataContext } from "../../context/Dataprovider";


export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    }


    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Warehouse} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}
