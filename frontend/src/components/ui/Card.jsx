import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 1rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-4px);
  }
`;
