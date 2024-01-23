import React from "react";
import "../../style/components/home/WelcomeSectionStyle.css"

import WelcomeImage from  "../../assets/welcome-image.png"

function WelcomeSection(){
    return(
        <section className="section-welcome">
            <div className="welcome-div">
                <div className="welcome-section-left">
                    <div className="titulo-welcome">
                        <h4>Bem-vindo ao mundo digital!</h4>
                    </div>
                    <div className="message-welcome">
                        <p>Neste espaço, você encontrará soluções de programação e tecnologia que impulsionam o sucesso das empresas. Explore como a inovação e a expertise em TI podem transformar sua visão em realidade. Juntos, vamos construir o futuro digital que você deseja.</p>
                    </div>
                </div>
                <div className="welcome-section-right">
                    <img className="image-welcome-section" src={WelcomeImage} alt="" />
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;