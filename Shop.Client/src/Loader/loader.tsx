import React from "react";
import { LoaderComponents } from "./Loader.css";
import icon from "../images/loader.webp";

const { StyledLoader } = LoaderComponents;


const Loader: React.FC = () => {
	return (
		<StyledLoader>
			<img src={icon} alt="loader image" />
		</StyledLoader>
	);
};

export default Loader;
