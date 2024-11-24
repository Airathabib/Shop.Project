import React from "react";
import { ProductImageComponents } from "./ProductImage.css";

const { StyledProductImage } = ProductImageComponents


interface ProductImageProps {
	src: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
	return (
		<StyledProductImage>
			<img src={src} alt={src}></img>
		</StyledProductImage>
	);
};

export default ProductImage;
