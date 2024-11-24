import React, { useState } from "react";
import { useAppDispatch } from "../main";
import { setFilter } from "../redux/listSlices";
import { FilterComponents } from "./Filter.css";

const { StyledFilter, StyledInput, StyledInputTitle } = FilterComponents

const Filter: React.FC = () => {

	const [title, setTitle] = useState("");
	const [from, setFrom] = useState<number>(0);
	const [to, setTo] = useState<number>(0);
	const dispatch = useAppDispatch();

	const handleSetFilter = () => {
		console.log('click');
		dispatch(
			setFilter({
				title: title,
				priceFrom: from,
				priceTo: to,
			})
		);
	};

	return (
		<StyledFilter>
			<label>
				<b>Title:</b>
			</label>

			<StyledInputTitle
				name="title"
				type="text"
				value={title}
				onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTitle(e.target.value)}
			/>

			<span>Price:</span>
			<label>
				<b></b>
			</label>

			<StyledInput
				name="from"
				type="number"
				value={from}
				min="0"
				onChange={(e: { target: { value: any; }; }) => setFrom(Number(e.target.value))}
			/>

			<label>
				<b>-</b>
			</label>

			<StyledInput
				name="from"
				type="number"
				value={to}
				min="0"
				onChange={(e: { target: { value: any; }; }) => setTo(Number(e.target.value))}
			/>

			<button type="button" onClick={handleSetFilter}>
				Search
			</button>
		</StyledFilter>
	);
};

export default Filter;
