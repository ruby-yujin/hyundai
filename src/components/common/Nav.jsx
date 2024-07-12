import React, { useState } from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { CATEGORY_INFOS } from '../../constants/constants';



function Nav() {
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();

  const isRouteActive = (path) => location.pathname === path;
  const isCategoryActive = (category) => category.route.some(route => isRouteActive(route.path));

  return (
    <NavWrap>
    <MainMenu>
      {CATEGORY_INFOS.map((category) => (
        <li key={category.id}>
          <button
            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            className={isCategoryActive(category) ? 'active' : ''}
          >
            {category.menu} 
            {category.id === "member" && (
              <ArrowWrap isOpen={activeCategory === category.id}>
                  <ChevronRight />
                  </ArrowWrap>
              )}
         
          </button>
          {activeCategory === category.id && (
            <SubMenu>
              {category.route.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={location.pathname === route.path ? 'active' : ''}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </SubMenu>
          )}
        </li>
      ))}
    </MainMenu>
  </NavWrap>
  );
}

const NavWrap = styled.nav`
  width: 300px;
  height: 100vh;
  background: #1f3e74;
  box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, .4);
  -webkit-box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.4);
`;


const MainMenu = styled.ul`
  width:100%;
  li {
      width:100%;
      button {
        color: #fff;
        font-size: 1.7rem;
        padding: 10px;
        height:70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        &.active {
          background:#295095;
        }
    }
  }
`;

const ArrowWrap = styled.span`
 margin-left: 5px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0)'};
`;



const SubMenu = styled.ul`
  li {
    width:100%;
    a {
      width:100%;
      height:60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:#666666;
      font-size: 1.7rem;
      background:#fff;
      font-weight: 500;
      &.active{
        background:#f0f0f0;
        font-weight: bold;
      }
    }
  }
`;



export default Nav;
