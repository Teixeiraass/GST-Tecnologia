import React from "react";
import "../../style/components/solucoes/SolutionsBannerStyle.css"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Logo from '../../assets/Logo_GST.png'
import bannerWork from '../../assets/solutions/image-banner-work.png'

function SolutionsBanner(){
    return(
        <div className="main-banner-solution">
            <div className="header-banner-solutions">
                <img src={Logo} alt="" />
                <h6>GST Tecnologia</h6>
            </div>
            <div className="container-solutions">
                <div className="title-banner-solutions">
                    <h1>Descubra o Poder Transformador dos Nossos Serviços</h1>
                    <h4>Soluções digitais para impulsionar o seu sucesso!</h4>
                </div>
                <div className="image-banner-solutions">
                    <img src={bannerWork} alt="" />
                </div>
            </div>
            <div className="button-to-services">
                <a href="#solutions"><ArrowDownwardIcon
                    fontSize="large"
                /></a>
            </div>
        </div>
    )
}

export default SolutionsBanner;