import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
	position: relative; 

  h3 {
    color: #000;
  }
  p {
    color: #ff6347;
		position: absolute;
		top: 13px;
    right: -11px;
  }
`;

export const Buttons = styled.div`
	position: absolute;
	right: 10px;
`
