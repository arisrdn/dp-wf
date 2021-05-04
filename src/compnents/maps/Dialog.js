export const DialogBottom = ({ children }) => {
	return (
		<div
			className="shadow p-3 overflow-auto"
			style={{
				width: "400px",
				height: "200px",
				position: "absolute",
				left: "50%",
				bottom: "0",
				backgroundColor: "white",
				transform: "translateX(-50%)",
				borderRadius: "5px",
			}}
		>
			{children}
		</div>
	);
};

export const DialogRight = ({ children }) => {
	return (
		<div
			className="shadow p-3 overflow-auto float-right mt-2 mr-2"
			style={{
				width: "500px",
				backgroundColor: "white",
				borderRadius: "5px",
			}}
		>
			{children}
		</div>
	);
};
