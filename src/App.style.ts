import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;

  @media (max-width: 800px) {
    padding: 32px 16px 0 16px;
  }
`;

export const Header = styled.header`
  width: 100%;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px 16px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  h1 {
    margin-bottom: 8px;

    @media (max-width: 576px) {
      font-size: 2.4rem;
    }
  }

  img {
    width: 8rem;
  }
`;
