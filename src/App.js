import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext, AuthContextProvaider } from "./contexts/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Routing from "./Router";
import Pizza from "./compnents/loading/Pizza";
const client = new QueryClient();
const App = () => {
	return (
		<>
			<AuthContextProvaider>
				<QueryClientProvider client={client}>
					<Router>
						<Routing />
					</Router>
				</QueryClientProvider>
			</AuthContextProvaider>
		</>
	);
};

export default App;
