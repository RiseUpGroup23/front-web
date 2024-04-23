import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
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
import { useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [isFormulario, setIsFormulario] = useState(location.pathname === "/enviar-correo");
  const [isClients, setIsClients] = useState(location.pathname === "/nuestros-clientes");
  const [isServices, setIsServices] = useState(location.pathname === "/servicios");
  const [isClientes, setIsClientes] = useState(location.pathname === "/clientes");
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsFormulario(location.pathname === "/enviar-correo");
    setIsClients(location.pathname === "/nuestros-clientes");
    setIsServices(location.pathname === "/servicios");
    setIsClientes(location.pathname === "/clientes");
  }, [location])

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <RouterLink to="/">
            <img
              src="LogoRiseUp/Logo.png" className="object-contain w-[125px]  mt-1 cursor-pointer" style={{ maxWidth: "unset" }}
            />
          </RouterLink>
          <Hidden mdUp>
            {!menuVisible && <IconButton
              edge="start"
              onClick={toggleMenu}
              sx={{ color: "white", maxWidth: "min-content" }}
            >
              <MenuIcon />
            </IconButton>}
          </Hidden>

          <Hidden mdDown>
            <div style={{ display: "flex" }}>
              {isHome && (
                <>
                  <RouterLink to="/enviar-correo">
                    <div className="btn">
                      Contacto
                    </div>
                  </RouterLink>
                  <a
                    href="#quienesSomos"
                  >
                    <div className="btn">
                      ¿Quiénes Somos?
                    </div>
                  </a>
                  <RouterLink to="/servicios">
                    <div className="btn">
                      Servicios
                    </div>
                  </RouterLink>
                  <RouterLink to="/nuestros-clientes">
                    <div className="btn">
                      Nuestros Clientes
                    </div>
                  </RouterLink>
                </>
              )}
              {isFormulario && (
                <>
                  <RouterLink to="/">
                    <div className="btn">
                      Inicio
                    </div>
                  </RouterLink>
                  <RouterLink to="/servicios">
                    <div className="btn">
                      Servicios
                    </div>
                  </RouterLink>
                  <RouterLink to="/nuestros-clientes">
                    <div className="btn">
                      Nuestros Clientes
                    </div>
                  </RouterLink>
                </>
              )}
              {isClients && (
                <>
                  <RouterLink to="/">
                    <div className="btn">
                      Inicio
                    </div>
                  </RouterLink>
                  <RouterLink to="/enviar-correo">
                    <div className="btn">
                      Contacto
                    </div>
                  </RouterLink>
                  <RouterLink to="/servicios">
                    <div className="btn">
                      Servicios
                    </div>
                  </RouterLink>
                </>
              )}
              {isServices && (
                <>
                  <RouterLink to="/">
                    <div className="btn">
                      Inicio
                    </div>
                  </RouterLink>
                  <RouterLink to="/enviar-correo">
                    <div className="btn">
                      Contacto
                    </div>
                  </RouterLink>
                  <RouterLink to="/nuestros-clientes">
                    <div className="btn">
                      Nuestros Clientes
                    </div>
                  </RouterLink>
                </>
              )}
              {isClientes && (
                <>
                  <RouterLink to="/">
                    <div className="btn">
                      Inicio
                    </div>
                  </RouterLink>
                  <RouterLink to="/enviar-correo">
                    <div className="btn">
                      Contacto
                    </div>
                  </RouterLink>
                  <RouterLink to="/servicios">
                    <div className="btn">
                      Servicios
                    </div>
                  </RouterLink>
                  <RouterLink to="/nuestros-clientes">
                    <div className="btn">
                      Nuestros Clientes
                    </div>
                  </RouterLink>
                </>
              )}
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
          {isHome && (
            <>
              <a
                href="#quienesSomos"
              >
                <ListItem sx={{ marginTop: "2rem", color: "white" }}>
                  ¿Quiénes Somos?
                </ListItem>
              </a>
              <RouterLink to="/servicios">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Servicios
                </ListItem>
              </RouterLink>
              <RouterLink to="/nuestros-clientes">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Clientes
                </ListItem>
              </RouterLink>
              <RouterLink to="/enviar-correo">
                <ListItem sx={{ color: "white" }}>
                  Contacto
                </ListItem>
              </RouterLink>
            </>
          )}
          {isFormulario && (
            <>
              <RouterLink to="/">
                <ListItem sx={{ marginTop: "2rem", color: "white" }}>
                  Inicio
                </ListItem>
              </RouterLink>
              <RouterLink to="/nuestros-clientes">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Clientes
                </ListItem>
              </RouterLink>
              <RouterLink to="/servicios">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Servicios
                </ListItem>
              </RouterLink>
            </>
          )}
          {isClients && (
            <>
              <RouterLink to="/">
                <ListItem sx={{ marginTop: "2rem", color: "white" }}>
                  Inicio
                </ListItem>
              </RouterLink>
              <RouterLink to="/enviar-correo">
                <ListItem sx={{ color: "white" }}>
                  Contacto
                </ListItem>
              </RouterLink>
              <RouterLink to="/servicios">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Servicios
                </ListItem>
              </RouterLink>
            </>
          )}
          {isServices && (
            <>
              <RouterLink to="/">
                <ListItem sx={{ marginTop: "2rem", color: "white" }}>
                  Inicio
                </ListItem>
              </RouterLink>
              <RouterLink to="/enviar-correo">
                <ListItem sx={{ color: "white" }}>
                  Contacto
                </ListItem>
              </RouterLink>
              <RouterLink to="/nuestros-clientes">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Clientes
                </ListItem>
              </RouterLink>
            </>
          )}
          {isClientes && (
            <>
              <RouterLink to="/">
                <ListItem sx={{ marginTop: "2rem", color: "white" }}>
                  Inicio
                </ListItem>
              </RouterLink>
              <RouterLink to="/enviar-correo">
                <ListItem sx={{ color: "white" }}>
                  Contacto
                </ListItem>
              </RouterLink>
              <RouterLink to="/nuestros-clientes">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Clientes
                </ListItem>
              </RouterLink>
              <RouterLink to="/servicios">
                <ListItem sx={{ color: "white" }}>
                  Nuestros Servicios
                </ListItem>
              </RouterLink>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
}
