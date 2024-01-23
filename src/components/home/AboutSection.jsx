import React from "react";
import '../../style/components/home/AboutSection.css'

function AboutSection() {
    return(
        <section className="section-about" id="about-section">
            <div className="sobre-nos">   
                <h1>SOBRE NOS</h1>
                <div className="container-sobre">
                    <div className="components-about-div">
                        <h3>OBJETIVO</h3>
                        <div className="text-components-about">
                            <p>Na GST, nosso foco é potencializar sua presença online. Através de soluções de TI personalizadas, incluindo hardware e software, ajudamos empresas pequenas a se destacarem digitalmente. Conte conosco para aumentar seu alcance e aprimorar o relacionamento com seus clientes. Seja mais competitivo no mundo digital com a nossa expertise em tecnologia.</p>
                        </div>
                    </div>
                    <div className="components-about-div">
                        <h3>NOSSA HISTORIA</h3>
                        <div className="text-components-about">
                            <p>Fundada por Guilherme Teixeira, a GST é uma empresa recente que acredita no potencial da tecnologia para transformar negócios. Nosso compromisso é fornecer serviços de TI, como hardware e software, que ajudam empresas a se destacarem digitalmente e aprimorarem seu relacionamento com os clientes.
                            Embora nossa história seja breve, nossa paixão pela inovação e pelo sucesso de nossos clientes é duradoura. Junte-se a nós nessa jornada tecnológica e descubra como podemos trabalhar juntos para alcançar um futuro digital brilhante.</p>
                        </div>
                    </div>
                    <div className="components-about-div">
                        <h3>Serviços</h3>
                        <div className="text-components-about">
                            <p>Na GST, oferecemos soluções completas de TI:<br/>
                            - Criação e Manutenção de Sites: Construímos e cuidamos do seu site.<br/>
                            - Manutenção de Computadores e Notebooks: Mantemos seus dispositivos em perfeitas condições.<br/>
                            - Criação de Sistemas Web: Desenvolvemos sistemas personalizados para otimizar seus processos.<br/>
                            Simplificamos a tecnologia para o seu sucesso digital.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nossos-valores">
                <h1>NOSSOS VALORES</h1>
                <div>
                    <div className="container-valores">
                        <div className="containter-title-valores">
                            <h3>INOVAÇÃO</h3>
                            <div className="container-text-valores">
                                <p>Compromisso com a inovação constante, buscando soluções tecnológicas criativas e eficazes.</p>
                            </div>
                        </div>
                        <div className="containter-title-valores">
                            <h3>Colaboração</h3>
                            <div className="container-text-valores">
                                <p>Valorização do trabalho em equipe e parcerias eficazes para atingir objetivos comuns.</p>
                            </div>
                        </div>
                        <div className="containter-title-valores">
                            <h3>Excelência</h3>
                            <div className="container-text-valores">
                                <p>Busca contínua pela excelência em todos os aspectos dos serviços prestados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;