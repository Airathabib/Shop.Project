import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FontStyles from "./FontStyles";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { listSlices } from "./redux/listSlices.ts";
import { productSlices } from "./redux/productSlices.ts";

export const rootReducer = combineReducers({
	listSlices: listSlices.reducer,
	productSlices: productSlices.reducer,
});
export const store = configureStore({
	reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<FontStyles />
		<App />
	</Provider>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
