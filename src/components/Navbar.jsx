import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Code with Ranjeet</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add Users</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
