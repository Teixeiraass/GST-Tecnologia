import React from "react";
import Formulario from "./Formulario";

import "../../style/components/contact/ContactStyle.css"

function Contact(){
    return(
        <div className="contact-main">
            <div className="bloco-contact">
                <div className="contat-text">
                    <h1>Formulario de contato</h1>
                </div>
                <div className="formulario-contact">
                    <Formulario/>
                </div>
            </div>
        </div>
    )
}

export default Contact;