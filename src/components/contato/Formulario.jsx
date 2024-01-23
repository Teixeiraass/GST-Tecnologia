import React, {useRef} from "react";
import emailjs from "@emailjs/browser"

import "../../style/components/contact/FormularioStyle.css"

function Formulario(){
    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4zkiqf6', 'template_rw9c5tj', form.current, 'mUb7wrl8NwjfNUtg0')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return(
        <div className="formulario">
            <form ref={form} onSubmit={enviarEmail}>
                <div className="inputs-div">
                    <label>Nome</label>
                    <input type="text" required placeholder="Nome" name="nome"/>
                </div>
                <div className="inputs-div">
                    <label>Email</label>
                    <input type="email" required placeholder="Email" name="email"/>
                </div>
                <div className="inputs-div">
                    <label>Serviços</label>
                    <select required name="servico">
                        <option value disabled>selecione</option>
                        <option value="landingPage">Landing Page</option>
                        <option value="sistemasWeb">SistemasWeb</option>
                        <option value="design">Design</option>
                    </select>
                </div>
                <div className="inputs-div">
                    <label>Mensagem</label>
                    <textarea name="mensagem" required cols="200" rows="10" placeholder="Use esse campo para deixar alguma mensagem, ou contato."></textarea>
                </div>
                <button type="submit" className="botao-envio-form">Enviar</button>
            </form>       
        </div>
    )
}

export default Formulario;