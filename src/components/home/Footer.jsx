import React from "react";
import '../../style/components/home/FooterStyle.css'
import { Link } from "react-router-dom";

import Logo from '../../assets/Logo_GST.png';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-components"> 
                <img className="logo-footer" src={Logo} alt="" />
                <p className="copy-footer">© Copyright 2023. Todos os direitos reservados.</p>
                <ul className="ul-footer">
                    <a href="/contato" className="linked-footer"><li className="li-footer">Contato</li></a>
                    <Link className="linked-footer"><li className="li-footer">Sobre</li></Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;