import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.accentLight};
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: ${({ theme }) => theme.transitions.smooth};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentLight};
  }
`;
