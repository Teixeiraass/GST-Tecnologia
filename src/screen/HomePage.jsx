import React from "react";
import Header from "../components/home/Header";
import WelcomeSection from "../components/home/WelcomeSection";
import AboutSection from "../components/home/AboutSection";
import Footer from "../components/home/Footer";


function HomePage(){
    return(
        <main>
            <Header/>
            <WelcomeSection/>
            <AboutSection/>
            <Footer/>
        </main>
    );
}

export default HomePage;