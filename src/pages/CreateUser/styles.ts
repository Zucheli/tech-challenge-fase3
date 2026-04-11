import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const RoleSelector = styled.div`
  display: flex;
  gap: 10px;
`;

export const RoleButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid ${({ active }) => (active ? "#2c3e50" : "#ccc")};
  background-color: ${({ active }) => (active ? "#2c3e50" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#444")};
  font-size: 0.95rem;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    border-color: #2c3e50;
    color: #2c3e50;
  }
`;
