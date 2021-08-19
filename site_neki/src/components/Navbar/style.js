import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  height: 70px;
  display: flex;
  justify-content: space-around;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const NavLink2 = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  
  &.active {
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 5px 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 25px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
