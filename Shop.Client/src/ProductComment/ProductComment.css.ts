import styled from "styled-components";

export const ProductCommentComponents = {
	StyledProductComment: styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  & > p:nth-child(1) {
    display: flex;
    justify-content: left;
    margin: 2px;
    font-weight: bold;
  }

  & > p:nth-child(2) {
    display: flex;
    justify-content: left;
    margin: 2px;
    font-weight: lighter;
  }
`
}
