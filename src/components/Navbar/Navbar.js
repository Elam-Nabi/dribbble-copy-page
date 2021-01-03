import React from "react";
import { NavLink as Link } from "react-router-dom";

import { useHooks } from "../../hooks/useHooks";

import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const { cart, closeCart } = useHooks();

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
          <BiBasket onClick={() => closeCart()} />
          <div className="cartinfo">
            <h5>{cart && <Cart cart={cart} />}</h5>
          </div>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;

const NavLink = styled(Link)``;
const Nav = styled.div`
  margin-top: 20px;
  position: fixed;
  left: 180px;
  ul {
    display: flex;

    li {
      list-style: none;
      padding-right: 80px;

      .cartinfo {
        height: 100px;
        width: 250px;
        border: 1px solid #000;
        h5 {
          font-size: 12px;
        }
      }
    }

    li:nth-child(5) {
      color: #000;
      position: absolute;
      left: 920px;
      font-size: 22px;
    }

    li:nth-child(6) {
      right: 40px;
      color: #000;
      position: absolute;
      left: 950px;
      font-size: 22px;
    }
    a {
      text-decoration: none;
      color: #000;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: #000;
      }
    }
  }

  h1 {
    color: red;
    z-index: 3;
  }

  .active {
    color: darkgray;
    background: #f2f1ef;
    border: none;
    border-radius: 5px;
  }
`;
