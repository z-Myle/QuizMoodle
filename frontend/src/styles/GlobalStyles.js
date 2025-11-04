import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;600&family=Poppins:wght@300;400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #fdf6f9 0%, #f9f0f3 100%);
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.muted};
    transition: ${({ theme }) => theme.transitions.smooth};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  button {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.soft};
    transition: ${({ theme }) => theme.transitions.smooth};

    &:hover {
      background: ${({ theme }) => theme.colors.accentLight};
      transform: translateY(-2px);
    }
  }

  input, select, textarea {
    border: 1px solid ${({ theme }) => theme.colors.accentLight};
    border-radius: 6px;
    padding: 0.5rem;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.main};
    transition: ${({ theme }) => theme.transitions.smooth};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentLight};
    }
  }

  h1, h2, h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.muted};
  }
`;
