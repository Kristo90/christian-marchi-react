import React, {useContext, useState, useEffect} from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const params = useParams();

    useEffect (() => {
        productos.forEache( producto => {

            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        })
    },[params.id, productos])


    return (
        <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">${detalle.price}</p>
                <div className="grid">
                    <p className="nuevo">Nuevo</p>
                    <div className="size">
                        <select placeholder="Tamaño">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                        </select>
                        <p>Tamaño</p>
                    </div>
                </div>
                <button>Añadir al carrito</button>
                <img src={detalle.image.default} alt={detalle.title}></img>
                <input type="range" min="1" max="36"></input>
                <div className="decriptiom">
                        <p><b>descripción:</b> loren
                        </p>
                </div>
            </div>
        }
        </>
    )
}