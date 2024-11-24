import { Link } from "react-router-dom";
import { ProductlistComponent } from "./StyledProductList.css";

const { StyledProductList } = ProductlistComponent;

export interface productListProps {
	title: string,
	price: number,
	comments: number,
	url: string,
}
export const ProductList = ({
	title,
	price,
	comments,
	url
}: productListProps) => {

	return (
		<StyledProductList>
			<Link to="/"> {title}</Link>
			<img src={url} alt={url}></img>
			<div>
				<span>Price: </span>
				{price}
			</div>
			<div>
				<span>Comments: </span>
				{comments}
			</div>
		</StyledProductList>
	);
}
