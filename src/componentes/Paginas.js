import React from "react";
// Importo Router Dom
import { Routes, Route } from "react-router-dom";
// Importo Inicio
import { Inicio } from "./Inicio/index";
// Importo Productos
import { ProductosLista } from "./Productos/index";
// Importo Productos Detalles
import { ProductoDetalles } from "./Productos/ProductoDetalles";
// Importo Formulario
import { Form } from "./Form/Form";


export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<ProductosLista />} />
                <Route path="/producto/id" element={<ProductoDetalles />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </section>

    )
}

export default Paginas;