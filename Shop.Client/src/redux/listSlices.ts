import { createSlice } from "@reduxjs/toolkit";
import { ListState } from "./types";
import { IProduct, ISimilar } from "../redux/types";

export const emptyProduct: IProduct = {
	id: "",
	title: "",
	description: "",
	price: 0,
	thumbnail: {
		id: "",
		productId: "",
		main: true,
		url: "",
	},
	comments: [
		{
			id: "",
			name: "",
			email: "",
			body: "",
			productId: "",
		},
	],
	images: [
		{
			id: "",
			productId: "",
			main: true,
			url: "",
		},
	],
};

export const emptySimilar: ISimilar = {
	id: "",
	title: "",
	price: 0,
};

const sortIntialState: ListState = {
	loading: false,
	filter: { title: "", priceFrom: 0, priceTo: 0 },
	products: [],
};


const listSlices = createSlice({
	name: "list",
	initialState: sortIntialState,
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		showLoadingList: (state, action) => {
			state.loading = action.payload;
		},
	},
});


export const { setFilter, setProducts, showLoadingList } = listSlices.actions;
export { listSlices };
