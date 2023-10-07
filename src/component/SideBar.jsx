// Sidebar.js
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo_garage.png";
import { PlaceImage } from "./PlaceImage";

const Sidebar = () => {
  return (
    <div>
      <SidebarContainer>
        <LogoContainer>
          <PlaceImage place={logo} imageSize={150} />
        </LogoContainer>
        <List>
          <ListItem>
            <Link href="/accueil">Accueil</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact">Contact</Link>
          </ListItem>
        </List>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #222;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #555;
  transition: background-color 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #555;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  display: block;
  transition: color 0.3s;

  &:hover {
    color: #00bcd4;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  display: block;
  transition: color 0.3s;

  &:hover {
    color: #00bcd4;
  }
`;

const LogoContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  width: 100%;
`;
