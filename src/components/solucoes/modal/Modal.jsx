import React from "react";
import '../../../style/components/solucoes/modal/ModalStyle.css'
import { Link } from "react-router-dom";

function Modal({modalClose, image, title, content,vantagem}){
    const handleClose = () => {
        modalClose(false);
    };

    return(
        <div className="modal-fundo">
            <div className="modal">
                <div className="close-button">
                    <button onClick={handleClose}>Fechar</button>
                </div>
                <div className="container-modal">
                    <div className="modal-itens">
                        <img src={image} alt="" />
                        <div className="content-modal">
                            <h1 className="titulo-modal">{title}</h1>
                            <p className="conteudo-modal">{content}</p>
                            <div className="vantagens">
                                <h1>Vantegens de ter o serviço de {title}</h1>
                                <p>{vantagem}</p>
                            </div>
                            <div className="button-modal-contact">
                                <div className="text-to-button-modal">
                                    <p>Não perca tempo: invista no crescimento do seu negócio agora! Descubra como nossos serviços especializados podem impulsionar sua presença online e alavancar seu sucesso digital. Feche conosco e conquiste resultados extraordinários</p>
                                </div>
                                <Link to={"/contato"} ><button className="button-contato-modal">Entre em contato!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;