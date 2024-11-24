import styled from "styled-components";

export const ProductItemComponents = {

	StyledProductItem: styled.div`
display: flex;
flex-direction: column;
`,

	StyledItemPresentation: styled.div`
display: flex;
flex-direction: row;
width: 100%;
`,

	StyledThumbnail: styled.div`
width: 40%;
`,

	StyledItemInfo: styled.div`
display: flex;
width: 60%;
flex-direction: column;

& > div:nth-child(1) {
	font-size: 1.2rem;
	color: rgba(0, 0, 0, 0.9);
	font-weight: bold;
	margin: 10px;
}

& > div:nth-child(2) {
	font-size: 1rem;
	color: rgba(0, 0, 0, 0.9);
	font-weight: lighter;
	margin: 10px;
}

& > div:nth-child(3) {
	font-size: 1rem;
	color: rgba(0, 0, 0, 0.9);
	font-weight: bold;
	margin: 10px;
}
`,

	StyledItemImage: styled.div`
display: inline-block;
`,

	StyledLine: styled.div`
width: 100%;
height: 20px;
border-bottom: 1px solid rgb(207, 213, 223);
`,

	StyledSimilars: styled.div`
display: inline-block;
width: 100%;
`
}
