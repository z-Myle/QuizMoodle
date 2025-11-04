import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background: ${({ theme }) => theme.gradients.hover};
    transform: translateY(-2px);
  }
`;
