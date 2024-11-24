import { SimularProductComponent } from "./SimularProduct.css";

const { StyledSimilarProducts } = SimularProductComponent;



export interface similarProductsProps {
	title: string;
	price: number;
}
const SimilarProducts = ({ title, price }: similarProductsProps) => {
	return (
		<StyledSimilarProducts>
			<div> {title} </div>
			<div>Price:{price} </div>
		</StyledSimilarProducts>
	);
};

export default SimilarProducts;
