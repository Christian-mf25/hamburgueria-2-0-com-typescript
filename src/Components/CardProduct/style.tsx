import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin: 20px 10px;
  border: 2px solid #e0e0e0;
  width: 300px;
  height: 346px;
	background-color: #fff;

	:hover{
		border: 2px solid #1876d2;
	}

  figure {
    background-color: #f5f5f5;
    width: 100%;
  }
  figure img {
    width: 177px;
    height: 177px;
  }

  div {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;
    padding-left: 20px;
  }

  p {
    font-size: 12px;
    color: #828282;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: #27ae60;
  }

`;
