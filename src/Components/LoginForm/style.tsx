import styled from "styled-components";

export const Background = styled.section`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    background-color: #bcece7;

    width: 80%;

    border-radius: 10px;
    padding: 20px;

    @media (min-width: 426px) {
      width: 50%;
    }

    @media (min-width: 769px) {
      width: 330px;
    }
  }

	.text{
		margin: 10px 0;
	}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
