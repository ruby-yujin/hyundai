import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CATEGORY_INFOS } from "../../constants/constants";
import { useNav } from "../../context/useNav";

const NavItem = ({ category, isActive, onClick, currentPath }) => (
  <li>
    <StyledButton
      onClick={onClick}
      className={isActive ? "active" : ""}
      isMember={category.id === "member"}
    >
      {category.menu}
      {category.id === "member" && (
        <>
          <ArrowWrap $isOpen={isActive}>
            <ChevronRight />
          </ArrowWrap>
          <TailImg $isOpen={isActive} src="/img/tail.png" alt="tail" />
        </>
      )}
    </StyledButton>

    {isActive && (
      <SubMenu>
        {category.route.map((route) => (
          <li key={route.path}>
            <StyledLink
              to={route.path}
              className={currentPath === route.path ? "active" : ""}
            >
              {route.name}
            </StyledLink>
          </li>
        ))}
      </SubMenu>
    )}
  </li>
);

function Nav() {
  const { isNavVisible } = useNav();
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();

  const toggleCategory = (categoryId) =>
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));

  if (!isNavVisible) return null;

  return (
    <NavWrap>
      <MainMenu>
        {CATEGORY_INFOS.map((category) => (
          <NavItem
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => toggleCategory(category.id)}
            currentPath={location.pathname}
          />
        ))}
      </MainMenu>
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  width: 300px;
  height: 100vh;
  background: #1f3e74;
  box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1024px) {
    /* display: none; */
  }
`;

const MainMenu = styled.ul`
  width: 100%;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.7rem;
  padding: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  position: relative;
  background: ${(props) =>
    props.className === "active" ? "#295095" : "transparent"};
`;

const ArrowWrap = styled.span`
  margin-left: 5px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(90deg)" : "rotate(0)")};
`;

const TailImg = styled.img`
  position: absolute;
  bottom: -15px;
  left: 10px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const SubMenu = styled.ul`
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  font-size: 1.7rem;
  background: #fff;
  font-weight: 500;
  &.active {
    background: #f0f0f0;
    font-weight: bold;
  }
`;

export default Nav;
