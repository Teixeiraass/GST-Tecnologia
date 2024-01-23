import React, { useState } from "react";
import "../../style/components/solucoes/SolucoesContainersStyle.css"

import Sistema from '../../assets/solutions/sitemas-web-criacao.png';
import LandinPage from '../../assets/solutions/criacao-de-site.png';
import Design from '../../assets/solutions/design.jpg';

import Modal from "./modal/Modal";


function Bloco(props) {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
    };

    return(
        <div className="modal-solucao">
            <div className="bloco-solucoes" onClick={handleClick}>   
                <img className="imagens-solucoes" src={props.image} alt="" />
                <div className="informacoes-bloco">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </div>
            </div>
            {openModal && 
            <Modal
                    image={props.image}
                    title={props.title}
                    content={props.content}
                    vantagem={props.vantagem}
                    modalClose={() => setOpenModal(false)}
            ></Modal>
            }
        </div>
    )

}

function SolucoesContainers() {
    return (
        <section className="solucoes-container">
            <div className="solucao">
                <Bloco
                    image={LandinPage}
                    title={"Landing page"}
                    content={'Destaque-se na web com nossas landing pages envolventes e otimizadas. Transformamos visitantes em clientes, proporcionando uma experiência digital única. Seja para lançamentos, promoções ou consolidar sua presença online, confie em nós para impulsionar seu sucesso digital!'}
                    vantagem={`Landing pages oferecem uma abordagem direcionada e eficaz para impulsionar resultados em marketing digital. Essas páginas dedicadas não apenas aumentam a relevância do conteúdo, proporcionando aos visitantes informações específicas, mas também têm o poder de captar leads valiosos, concentrar-se nas ações desejadas, analisar e otimizar continuamente, reforçar a credibilidade da marca, garantir uma experiência consistente em dispositivos móveis e permitir implementação rápida em resposta a oportunidades de marketing. Integrar serviços de criação de landing pages ao seu arsenal de marketing online pode ser a chave para gerar impacto significativo e alcançar objetivos estratégicos com eficácia.`}
                />
                <Bloco
                    image={Sistema}
                    title={"Criação de Sistemas"}
                    content={'Maximize eficiência com nossas soluções digitais integradas. Desenvolvemos sistemas personalizados para web e mobile, proporcionando uma presença online poderosa. Da concepção à implementação, transformamos suas ideias em soluções tecnológicas avançadas. Conquiste o futuro digital com nossa expertise em sistemas de alto desempenho.'}
                    vantagem={`Integrar serviços de desenvolvimento de sistemas web oferece uma vantagem competitiva substancial no cenário empresarial. Ao adotar essa abordagem, as empresas podem otimizar operações, destacar-se online e garantir uma presença digital poderosa. Do conceito à implementação, o desenvolvimento de sistemas personalizados permite a criação de soluções tecnológicas avançadas, adaptadas às necessidades específicas. `}
                />
                <Bloco
                    image={Design}
                    title={"Design"}
                    content={'Transforme sua visão em realidade com nosso serviço de design especializado. Criamos soluções visuais memoráveis para impulsionar sua marca. Confie em nossa criatividade para destacar sua empresa de forma visualmente impactante. Transforme conceitos em designs incríveis com nosso serviço exclusivo.'}
                    vantagem={`Integrar serviços de design oferece uma vantagem competitiva poderosa no cenário de negócios. Essa abordagem permite destacar-se visualmente, criar uma identidade de marca memorável e transmitir mensagens impactantes. Com designs inovadores e interfaces intuitivas, a experiência do usuário é aprimorada, fortalecendo a lealdade à marca. Mantendo consistência de marca, adaptabilidade a diferentes canais e utilizando elementos visuais para evocar emoções, as empresas podem criar conexões emocionais profundas com seu público-alvo. Além disso, a versatilidade de materiais e a percepção de valor são aprimoradas, contribuindo para o sucesso de estratégias de marketing eficazes.`}
                />
            </div>
        </section>
    )
}

export default SolucoesContainers;