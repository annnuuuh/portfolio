import { Box } from "@mui/material";
import { styled } from "styled-components";

export const Nav = () => {
  return (
    <NavBar>
      <NavTitle>ANNA JOHNSON</NavTitle>
      <NavLinks>
        <a>development</a>
        <a>dogs</a>
        <a>contact</a>
      </NavLinks>
    </NavBar>
  );
};

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #61948c;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const NavLinks = styled(Box)`
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f5f5ef;
  width: 30%;
`;

export const NavTitle = styled.h1`
  font-family: "Sawarabi Gothic";
  font-size: 72px;
  color: #f5f5ef;
`;
