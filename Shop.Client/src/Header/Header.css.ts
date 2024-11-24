import styled from "styled-components";

export const HeaderComponents = {
	StyledHeader: styled.div`
  & > img {
    height: 100px;
    width: 100px;
  }
  & > h1 {
    color: black;
    display: block;
    font-size: 3em;
    font-weight: bold;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`
}
