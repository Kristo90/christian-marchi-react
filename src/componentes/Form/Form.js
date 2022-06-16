import React, { useContext, useState } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Form = () => {
    return (
        <div className="container-form">
            <h4 className="form-title">Completa el formulario con tus datos para confirmar la compra.</h4>
            <div className="form-info">
                <form></form>
            </div>
        
        </div>

    )
}