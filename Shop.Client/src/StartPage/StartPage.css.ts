import styled from "styled-components";

export const StartPageComponent = {

	StyledStartPage: styled.div`
  & > p {
    font-size: 1.2rem;
    color: black;
  }

  & > div {
    display: inline-flex;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }
`,

	StyledPrimaryButton: styled.button`
  width: 240px;
  height: 50px;
  border-radius: 50px;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  border: 0.5px solid black;
  background-color: lightskyblue;
`,

	StyledSecondaryButton: styled.button`
  width: 240px;
  height: 50px;
  border-radius: 50px;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  background-color: lightsteelblue;
  border: 0.5px solid rgb(114, 115, 117);
`
}
