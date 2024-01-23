import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Solucoes from "../components/solucoes/Solucoes";
import Language from "../components/solucoes/Language";
import SolutionsBanner from "../components/solucoes/SolutionsBanner";


function SolucoesScreen () {
    return(
        <div>
            <Header/>
            <SolutionsBanner/>
            <Solucoes/>
            <Language/>
            <Footer/>
        </div>
    )
}

export default SolucoesScreen;