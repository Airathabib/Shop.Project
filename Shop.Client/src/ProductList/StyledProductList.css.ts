import styled from "styled-components";

export const ProductlistComponent = {
	StyledProductList: styled.div`
  display: inline-block;
  margin: 10px;
  width: 220px;
  height: 236px;

  & > a {
    display: block;
    color: inherit;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 600;
  }

  & > img {
    max-width: 100%;
    width: 150px;
  }

  & span {
    font-weight: 600;
  }
`

}
