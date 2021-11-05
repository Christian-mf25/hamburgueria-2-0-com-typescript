import styled from "styled-components";

export const Cover = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #f5f5f5c0;
  height: 100vh;
  width: 100vw;
  justify-content: center;

  .cart {
		display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 70%;
    border: 3px solid #1876d2;
    border-radius: 10px;
    overflow-y: auto;
    background-color: #fff;
    width: 340px;
    position: relative;
  }

  .total {
    color: #fff;
    background-color: #4c7baa;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
		font-weight: 600;
		width: 100%;
  }

  .cart-top {
    background-color: #1876d2;
    height: 50px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 3;

    h3 {
      font-size: 1.3rem;
      padding-left: 10px;
      color: #f5f5f5;
    }

    p {
      color: #fff;
      font-size: 1.3rem;
      padding-right: 10px;
      cursor: pointer;
    }
  }

  .cart-card {
    margin-top: 60px;
		display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
