import React from "react";
import { ProductCommentComponents } from "./ProductComment.css";

const { StyledProductComment } = ProductCommentComponents


interface ProductCommentProps {
	name: string;
	body: string;
}

const ProductComment: React.FC<ProductCommentProps> = ({ name, body }) => {
	return (
		<StyledProductComment>
			<p> {name} </p>
			<p> {body} </p>
		</StyledProductComment>
	);
};

export default ProductComment;
