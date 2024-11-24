import React, { useState } from "react";
import { IComment, IProduct } from "../redux/types";
import { useAppDispatch } from "../main";
import { setComents } from "../redux/productSlices";
import { setNewComment } from "../queries";
import { NewCommentFormComponents } from "./NewCommentForm.css";

const { StyledNewCommentForm, StyledLabel, StyledTitle, StyledError } = NewCommentFormComponents;

interface NewCommentFormProps {
	product: IProduct;
	productComments: IComment[];
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({
	product,
	productComments,
}) => {
	const dispatch = useAppDispatch();
	const [body, setBody] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const handleSaveCommentClick = () => {
		if (!body.trim()) {
			setError("Error >>> Empty text field");
			return;
		} else if (!name.trim()) {
			setError("Error >>> Empty title field");
			return;
		} else if (!email.trim()) {
			setError("Error >>> Empty email field");
			return;
		}
		if (!email.includes("@")) {
			setError("Error >>> Invalid email format");
			return;
		} else setError("");

		const doSuccessNewComment = (id: string) => {
			const comments = [
				...productComments,
				{
					id: id,
					name: name,
					email: email,
					body: body,
					productId: product.id,
				},
			];
			dispatch(setComents(comments));
		};

		const doErrorNewComment = () => {
			setError("Error >>> failed to upload on the server");
		};

		setNewComment(
			product.id,
			name,
			email,
			body,
			doSuccessNewComment,
			doErrorNewComment
		);
		setBody("");
		setName("");
		setEmail("");
	};

	return (
		<StyledNewCommentForm>

			<StyledTitle> New Comment </StyledTitle>

			<StyledLabel>
				Title:{" "}
				<input
					name="title"
					type="text"
					value={name}
					maxLength={50}
					onChange={(e) => {
						setName(e.target.value);
					}}
				></input>
				E-mail:{" "}
				<input
					name="mail"
					type="text"
					value={email}
					maxLength={30}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				></input>
				Text:&nbsp;&nbsp;{" "}
				<textarea
					name="text"
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
				></textarea>
			</StyledLabel>

			<StyledError> {error} </StyledError>

			<button type="button" onClick={handleSaveCommentClick}>
				Save New Comment
			</button>

		</StyledNewCommentForm>
	);
};

export default NewCommentForm;
