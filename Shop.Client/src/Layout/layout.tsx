import React from "react";
import List from "../List/List";
import ProductItem from "../ProductItem/ProductItem";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import StartPage from "../StartPage/StartPage";
import { LayoutComponents } from "./Layout.css"

const { StyledLayout } = LayoutComponents;

const Layout: React.FC = () => {
	return (
		<StyledLayout>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path={"/products/:productId"} element={<ProductItem />} />
					<Route path={"/products"} element={<List />} />
				</Routes>
			</div>
		</StyledLayout>
	);
};

export default Layout;
