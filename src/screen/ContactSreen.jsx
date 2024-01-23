import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Contact from "../components/contato/Contact";

function ContactScreen(){
    return(
        <div className="contact-screen">
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactScreen;