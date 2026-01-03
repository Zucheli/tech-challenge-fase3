import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;

export const ContentPreview = styled.p`
  font-size: 0.95rem;
  color: #444;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ReadMore = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
