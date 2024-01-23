import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "../../style/components/home/HeaderStyle.css";

import Logo from "../../assets/Logo_GST.png";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>  {
    if(window.scrollY >= 40){
      setNavbar(true);
    }
    else {
      setNavbar(false);
     }
  }
  window.addEventListener('scroll', changeBackground)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={navbar ? 'header-home active' : 'header-home'}>
      <div className="left-header">
      <Link to={"/"} style={{ textDecoration: 'none' }}><img className="logo-img" src={Logo} alt="" /></Link>
      </div>
      <nav className="right-header">
        <ul className="ul-menu">
          <Link to={"/"} className="linked-header"><li className="li-menu">home</li></Link>
          <a href="/#about-section" className="linked-header"><li className="li-menu">sobre</li></a>
          <Link to={"/solucoes"} className="linked-header"><li className="li-menu">nossas soluções</li></Link>
          <Link to={"/contato"} className="linked-header"><li className="li-menu">contato</li></Link>
        </ul>
      </nav>
      <div className="mobile-menu-icon">
        <Button onClick={toggleMobileMenu}>
          <MenuIcon />
        </Button>
      </div>
        <Drawer
            anchor="right"
            open={isMobileMenuOpen}
            onClose={toggleMobileMenu}
            PaperProps={{
                style: {
                backgroundColor: '#403289', // Cor de fundo desejada
                },
            }}
        >
        <List>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <a href="/#about-section" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Sobre" />
            </ListItem>
          </a>
          <Link to={"/solucoes"} style={{ textDecoration: 'none' }}><ListItem button>
            <ListItemText primary="Nossas soluções" />
          </ListItem></Link>
          <Link to={"/contato"} style={{ textDecoration: 'none' }} ><ListItem button>
            <ListItemText primary="Contato" />
          </ListItem></Link>
        </List>
      </Drawer>
    </header>
  );
}

export default Header;
