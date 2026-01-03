import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

export const HeaderContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const NavLink = styled.span`
  font-size: 0.95rem;
  cursor: pointer;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  color: #c0392b;

  &:hover {
    text-decoration: underline;
  }
`;
