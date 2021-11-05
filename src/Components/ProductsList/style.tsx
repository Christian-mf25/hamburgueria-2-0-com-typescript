import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 70px auto;
  overflow-x: scroll;
  width: 90%;
  position: absolute;

  @media (min-width: 720px) {
    overflow: initial;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
