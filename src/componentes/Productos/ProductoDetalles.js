import React, {useContext, useState, useEffect} from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const params = useParams();
    let item = 0;

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
                <img src={detalle.image} alt={detalle.title} />
                <div className="decriptiom">
                        <p><b>descripción:</b> loren
                        </p>
                </div>
            </div>
        }
        <h2 className="relacioneados">Productos relacionados</h2>
        <div className="productos">
            {
                productos.map((producto) =>{
                    if((item < 6)&&(detalle.category === producto.category)){
                        item++;
                        return <ProductoItem
                        key={producto.id}
                        title={producto.id}
                        image={producto.image}
                        category={producto.category}
                        price={producto.price}
                        id={producto.id}
                        />
                    }
                })
            }
        </div>
        </>
    )
}