import React from "react";
import logo from "../images/logo.png";
import { HeaderComponents } from "./Header.css"

const { StyledHeader } = HeaderComponents

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<img src={logo} alt="Logo" />
			<h1>Shop.Client</h1>
		</StyledHeader>
	);
};

export default Header;
