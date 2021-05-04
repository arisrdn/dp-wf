import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
	modalLogin: false,
	modalRegister: false,
	isLogin: false,
	error: null,
	errormail: null,
	loading: true,
};

export const reducer = (state, { type, payload }) => {
	// console.log("dari context Auth :", payload);
	switch (type) {
		case "MODAL_LOGIN_OPEN":
			return {
				...state,
				modalLogin: true,
			};
		case "MODAL_LOGIN_CLOSE":
			return {
				...state,
				modalLogin: false,
			};
		case "MODAL_REGISTER_OPEN":
			return {
				...state,
				modalRegister: true,
			};
		case "MODAL_REGISTER_CLOSE":
			return {
				...state,
				modalRegister: false,
			};
		case "USER_SUCCESS":
		case "LOGIN_SUCCESS":
			localStorage.setItem("token", payload.token);

			return {
				...state,
				isLogin: true,
				user: {
					email: payload.email,
					fullName: payload.fullName,
					image: payload.image,
					phone: payload.phone,
					restaurant: payload.restaurant,
				},
				loading: false,
			};
		case "AUTH_ERROR":
		case "LOGOUT":
			localStorage.removeItem("token");
			return {
				...state,
				isLogin: false,
				loading: false,
				user: null,
			};
		case "REGISTER":
			// console.log("REgister", payload);
			const checkEmail = state.users.find((u) => u.email === payload.email);
			if (checkEmail) {
				return {
					...state,
					modalRegister: true,
					errormail: "email sudah terdaftar",
				};
			}
			return {
				...state,
				errormail: null,
				users: [
					...state.users,
					{
						...payload,
					},
				],
			};
		default:
			return state;
	}
};

export const AuthContextProvaider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{children}
		</AuthContext.Provider>
	);
};
