import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Hidden
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import '../ComponentesVistaLanding/style.css';

const menuItems = [
  { text: "Inicio", to: "/" },
  { text: "Contacto", to: "/enviar-correo" },
  { text: "¿Quiénes Somos?", to: "/#quienesSomos" },
  { text: "Servicios", to: "/servicios" },
  { text: "Nuestros Clientes", to: "/nuestros-clientes" },
  { text: "QuickPlanner", to: "/quickplanner" },
]

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#151515" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <RouterLink to="/">
            <img
              src="LogoRiseUp/Logo.png" className="object-contain w-[125px]  mt-1 cursor-pointer" style={{ maxWidth: "unset" }}
            />
          </RouterLink>
          <Hidden lgUp>
            {!menuVisible && <IconButton
              edge="start"
              onClick={toggleMenu}
              sx={{ color: "white", maxWidth: "min-content" }}
            >
              <MenuIcon />
            </IconButton>}
          </Hidden>

          <Hidden lgDown>
            <div style={{ display: "flex" }}>
              <>
                {menuItems.map((item, index) => (
                  <RouterLink to={item.to} key={index}>
                    <div className="btn">{item.text}</div>
                  </RouterLink>
                ))}
              </>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menuVisible}
        onClose={toggleMenu}
      >
        <List sx={{ position: "relative", minWidth: "40vw", backgroundColor: "#1e1e1e", height: "100%" }}>
          <IconButton
            edge="start"
            onClick={toggleMenu}
            sx={{ color: "white", maxWidth: "min-content", position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <>
            {menuItems.map((item, index) => (
              <RouterLink to={item.to} key={index}>
                <ListItem sx={{ marginTop: `${index === 0 ? "2rem" : "0"}`, color: "white" }}>
                  {item.text}
                </ListItem>
              </RouterLink>
            ))}
          </>
        </List>
      </Drawer>
    </div>
  );
}
