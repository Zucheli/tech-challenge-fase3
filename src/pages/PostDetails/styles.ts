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

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const ActionButton = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ active }) => (active ? "#1877f2" : "#ddd")};
  background-color: ${({ active }) => (active ? "#e7f0fd" : "#fff")};
  color: ${({ active }) => (active ? "#1877f2" : "#2c3e50")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  box-shadow: ${({ active }) => (active ? "0 0 0 3px rgba(24,119,242,0.15)" : "none")};

  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;

  transition: all 0.2s ease;

  &:hover {
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;
  }
`;

export const FavoriteButton = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ active }) => (active ? "#f5a623" : "#ddd")};
  background-color: ${({ active }) => (active ? "#fdf8ee" : "#fff")};
  color: ${({ active }) => (active ? "#f5a623" : "#2c3e50")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  box-shadow: ${({ active }) => (active ? "0 0 0 3px rgba(245,166,35,0.15)" : "none")};

  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;

  transition: all 0.2s ease;

  &:hover {
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;
  }
`;

export const CountLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #2c3e50;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f5f5f5;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 32px 0 24px;
`;

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CommentsSectionTitle = styled.h2`
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 4px;
`;

export const CommentCard = styled.div`
  background-color: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const CommentMeta = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const CommentAuthor = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #2c3e50;
`;

export const CommentContent = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
`;

export const DeleteCommentButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #e74c3c;
    background-color: #fdf2f2;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const CommentInput = styled.textarea`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #2c3e50;
  resize: none;
  min-height: 60px;
  background-color: #fafafa;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #2c3e50;
    background-color: #fff;
  }
`;

export const CommentSubmitButton = styled.button`
  padding: 10px 18px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  align-self: flex-end;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a252f;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
