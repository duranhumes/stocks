const SymbolError = ({ data }) => {
	return (
		<li className="errorWrapper">
			<h5 style={{ color: '#DA4D2F' }}>{data}</h5>
		</li>
	);
};

export default SymbolError;
