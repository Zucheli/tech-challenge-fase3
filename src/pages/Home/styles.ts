import styled from "styled-components";

export const FilterContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 140px;
  padding: 9px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #2c3e50;
  background-color: #fafafa;

  &:focus {
    outline: none;
    border-color: #2c3e50;
    background-color: #fff;
  }
`;

export const Select = styled.select`
  padding: 9px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: #fafafa;
  color: #2c3e50;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2c3e50;
    background-color: #fff;
  }
`;

export const Button = styled.button`
  padding: 9px 20px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #1a252f;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ClearButton = styled.button`
  padding: 9px 16px;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  white-space: nowrap;

  transition: all 0.2s ease;

  &:hover {
    border-color: #2c3e50;
    color: #2c3e50;
  }
`;

export const ToggleButton = styled.button<{ active?: boolean }>`
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  border: 1.5px solid ${({ active }) => (active ? "#2c3e50" : "#ddd")};
  background-color: ${({ active }) => (active ? "#2c3e50" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#666")};

  &:hover {
    border-color: #2c3e50;
    background-color: #2c3e50;
    color: #fff;
  }
`;