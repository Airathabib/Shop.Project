import styled from "styled-components";

export const NewCommentFormComponents = {

	StyledNewCommentForm: styled.div`
  align-items: start;
  border: 0.2px solid rgba(114, 115, 117, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 10px;

  & > button {
    background-color: lightcyan;
    border: 0.5px solid black;
    border-radius: 50px;
    color: #3b3c3d;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 15px;
    outline: none;
    text-decoration: none;
    padding: 0.7rem 0.7rem;
  }
`,

	StyledLabel: styled.label`
  color: rgba(0, 0, 0, 0.9);
  font-size: 1rem;
  font-weight: bold;
  flex-direction: row;
  width: 60px;

  & input:nth-child(1) {
      border: 0.5px solid rgb(114, 115, 117);
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.9);
      font-size: 1rem;
      height: 40px;
      outline: none;
      width: 220px;
  }

  & input:nth-child(2) {
    border: 0.5px solid rgb(114, 115, 117);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1rem;
    height: 40px;
    outline: none;
    width: 220px;
  }

  & > textarea {
    height: 100px;
    width: 580px;
    border: 0.5px solid rgb(114, 115, 117);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1rem;
    outline: none;
  }
`,

	StyledTitle: styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  margin: 10px;
`,

	StyledError: styled.div`
  color: #da4518;
  padding: 5px;
`

}
