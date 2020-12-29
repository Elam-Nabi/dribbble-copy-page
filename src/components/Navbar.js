import React from "react";
import { NavLink as Link } from "react-router-dom";

import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBasket } from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" exact activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <IoMdHeartEmpty />
        </li>
        <li>
          <BiBasket />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;

const NavLink = styled(Link)``;
const Nav = styled.div`
  margin-top: 20px;
  left: 100px;
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      list-style: none;
    }

    li:nth-child(5) {
      color: #fff;
      position: absolute;
      right: 100px;
      font-size: 22px;
    }

    li:nth-child(6) {
      right: 40px;
      color: #fff;
      position: absolute;
      right: 75px;
      font-size: 22px;
    }
    a {
      text-decoration: none;
      color: #b5b6b8;
      transition:all 0.4s ease-in-out;
      &:hover {
        color:#fff;
      }
    }
  }

  .active {
    color: #fff;
    text-shadow: -1px -1px 11px rgba(255, 255, 255, 1);
  }
`;
