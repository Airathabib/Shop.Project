import styled from "styled-components";

export const SimularProductComponent = {

	StyledSimilarProducts: styled.div`
  display: inline-block;
  padding: 10px;

  & div:nth-child(1) {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
  }

  & div:nth-child(2) {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
    margin: 10px;
  }
`
}
