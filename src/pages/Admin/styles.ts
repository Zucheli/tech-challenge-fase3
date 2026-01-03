import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
`;

export const CreateButton = styled.button`
  padding: 8px 14px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const PostTitle = styled.strong`
  font-size: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button<{ variant?: "edit" | "delete" }>`
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;

  background-color: ${({ variant }) =>
        variant === "delete" ? "#c0392b" : "#2980b9"};

  color: white;

  &:hover {
    opacity: 0.85;
  }
`;
