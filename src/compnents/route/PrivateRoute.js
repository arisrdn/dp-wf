import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import Pizza from "../loading/Pizza";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [state, dispatch] = useContext(AuthContext);
	const { loading } = state;
	const handleOpenLogin = () => {
		dispatch({
			type: "MODAL_LOGIN_OPEN",
		});
	};

	return (
		<Route
			{...rest}
			render={(props) =>
				loading ? (
					<Pizza />
				) : state.isLogin ? (
					<Component {...props} />
				) : (
					<Redirect to="/?popup=login" />
				)
			}
		/>
	);
};

export default PrivateRoute;
