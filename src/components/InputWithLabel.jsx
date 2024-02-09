export const InputWithLabel = ({ labelText, type, onChangeChoice, value, id, min }) => {
	let isValid = true;
	if (min && value < 1) {
		isValid = false;
	}
	const handleChange = (event) => {
		onChangeChoice(id, +event.target.value);
	};

	return (
		<p>
			{!isValid && <p>the value has to be greater than 1</p>}
			<label>{labelText}</label>
			<input type={type} value={value} onChange={handleChange} />
		</p>
	);
};
