const SymbolError = ({ data }) => {
	let message;
	if (data && data.response) {
		message = data.response.data;
	}
	return (
		<li className="errorWrapper">
			<h5 style={{ color: '#DA4D2F' }}>{message && message}</h5>
		</li>
	);
};

export default SymbolError;
