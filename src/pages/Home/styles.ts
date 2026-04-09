import styled from "styled-components";

export const FilterContainer = styled.div`
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

export const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #2c3e50;

  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
`;

export const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: #fff;
  color: #2c3e50;

  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;

  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #1a252f;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ClearButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: #2c3e50;
    color: #fff;
  }
`;