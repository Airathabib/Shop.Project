import styled from "styled-components";

export const FilterComponents = {

	StyledFilter: styled.div`
  margin-bottom: 10px;
  
  & > label {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
		margin-left: 10px;
  }

  & > button {
    width: 110px;
    height: 40px;
    border-radius: 50px;
    text-decoration: none;
    color: #3b3c3d;
    outline: none;
    border: 0.5px solid black;
    cursor: pointer;
    font-size: 1rem;
    background-color: lightcyan;
		margin-left: 10px;
  }

  & > span {
    font-weight: bold;
		margin-left: 10px;
  }
`,

	StyledInput: styled.input`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(114, 115, 117);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
	white-space:nowrap;
	margin-left: 10px;
`,

	StyledInputTitle: styled.input`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(114, 115, 117);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
	white-space:nowrap;
	margin-left: 10px;
`,

}

