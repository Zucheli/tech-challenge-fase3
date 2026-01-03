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

export const TextArea = styled.textarea`
  padding: 10px;
  min-height: 160px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
`;

export const Button = styled.button`
  align-self: flex-end;
  padding: 10px 18px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
