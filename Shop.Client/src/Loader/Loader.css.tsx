import styled from "styled-components";

export const LoaderComponents = {
	StyledLoader: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;

  & > img {
    width: 120px;
    height: 120px;
  }
`
}
