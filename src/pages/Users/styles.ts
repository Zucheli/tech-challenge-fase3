import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const PageHeader = styled.div`
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
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Username = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
`;

export const RoleBadge = styled.span<{ role: string }>`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  width: fit-content;

  background-color: ${({ role }) => (role === "PROFESSOR" ? "#eaf0fb" : "#eafaf1")};
  color: ${({ role }) => (role === "PROFESSOR" ? "#1877f2" : "#27ae60")};
  border: 1px solid ${({ role }) => (role === "PROFESSOR" ? "#b3cef7" : "#a9dfbf")};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button<{ variant: "edit" | "delete" }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;

  background-color: ${({ variant }) => (variant === "edit" ? "#f0f4ff" : "#fff0f0")};
  color: ${({ variant }) => (variant === "edit" ? "#1877f2" : "#e74c3c")};
  border: 1px solid ${({ variant }) => (variant === "edit" ? "#b3cef7" : "#f5b7b1")};

  &:hover {
    opacity: 0.8;
  }
`;
