import styled from "styled-components";

export const LayoutComponents = {
	StyledLayout: styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);

  & > div {
    min-height: 100vh;
    min-width: 100vw;
    background-color: #f1f1f1;
    padding: 3rem;
    text-align: center;
  }
`
}

