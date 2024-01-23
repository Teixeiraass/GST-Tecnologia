import React from "react";
import "../../style/components/solucoes/LanguageStyle.css"

function Language(){
    return(
        <div className="main-language">
            <div className="title-language">
                <h1>Tecnologias que trabalhamos</h1>
            </div>
            <div className="types-language-icons">
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-java-plain-wordmark"></i>
                <i class="devicon-mysql-plain-wordmark"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-amazonwebservices-plain-wordmark"></i>
                <i class="devicon-nodejs-plain"></i>
            </div>
        </div>
    )
}

export default Language;