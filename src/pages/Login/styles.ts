import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 16px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;

  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;

  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Error = styled.p`
  margin-top: 12px;
  font-size: 0.85rem;
  color: #c0392b;
  text-align: center;
`;
