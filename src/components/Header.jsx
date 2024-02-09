import money from '../assets/investment-calculator-logo.png';

export const CalculatorHeader = () => {
	return (
		<header id='header'>
			<img src={money} alt='a bag with money' /> <h1>Investment Calculator</h1>
		</header>
	);
};
