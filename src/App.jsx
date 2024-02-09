import { useState } from 'react';

import { CalculatorHeader } from './components/Header';
import { UserInputs } from './components/UserInput';
import { Results } from './components/Results';

function App() {
	const [investorChoices, setInvestorChoices] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleChageChoices = (field, value) => {
		setInvestorChoices((prev) => {
			let updatedChoices = { ...prev };
			updatedChoices[field] = value;
			return updatedChoices;
		});
	};

	console.log('en app el state', investorChoices);
	// console.log('en app', resultsList);

	return (
		<>
			<CalculatorHeader />
			<UserInputs investorChoices={investorChoices} onChangeChoice={handleChageChoices} />
			<Results investorChoices={investorChoices} />
		</>
	);
}

export default App;
