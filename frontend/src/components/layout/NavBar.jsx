import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  background: ${({ theme }) => theme.gradients.sumi};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentLight};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.surface};
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: ${({ theme }) => theme.transitions.smooth};

  &.active {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    box-shadow: 0 2px 8px rgba(233, 162, 177, 0.3);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.jade};
    transform: translateY(-2px);
  }
`;

export default function NavBar() {
  return (
    <NavContainer>
      <StyledLink to="/">All Quizzes</StyledLink>
      <StyledLink to="/create">Create</StyledLink>
      <StyledLink to="/manage">Manage</StyledLink>
    </NavContainer>
  );
}
