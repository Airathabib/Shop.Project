import React from "react";
import { Link } from "react-router-dom";
import { StartPageComponent } from "./StartPage.css";

const { StyledStartPage, StyledPrimaryButton, StyledSecondaryButton } = StartPageComponent;

const StartPage: React.FC = () => {
	return (
		<StyledStartPage>
			<p>
				В базе данных находится n товаров общей стоимостью m
			</p>

			<div>
				<Link to={`/products`}>
					<StyledPrimaryButton type="button">
						Перейти к списку товаров
					</StyledPrimaryButton>
				</Link>

				<Link to={`http://localhost:3000/admin/`} target="_blank">
					<StyledSecondaryButton type="button">
						Перейти в систему администрирования
					</StyledSecondaryButton>
				</Link>
			</div>
		</StyledStartPage>
	);
};

export default StartPage;
