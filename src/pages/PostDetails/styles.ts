import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

export const Author = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 24px;
`;

export const Content = styled.article`
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  white-space: pre-line;
`;

export const BackButton = styled.button`
  margin-top: 32px;

  background: none;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;
