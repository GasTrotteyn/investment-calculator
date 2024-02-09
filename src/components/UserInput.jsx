import { InputWithLabel } from './InputWithLabel';

export const UserInputs = ({ onChangeChoice, investorChoices }) => {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<InputWithLabel
					labelText='initial investment'
					type='number'
					id='initialInvestment'
					value={investorChoices.initialInvestment}
					onChangeChoice={onChangeChoice}
				/>
				<InputWithLabel
					labelText='annual investment'
					type='number'
					id='annualInvestment'
					value={investorChoices.annualInvestment}
					onChangeChoice={onChangeChoice}
				/>
			</div>
			<div className='input-group'>
				<InputWithLabel
					labelText='expected return'
					type='number'
					id='expectedReturn'
					value={investorChoices.expectedReturn}
					onChangeChoice={onChangeChoice}
				/>
				<InputWithLabel
					labelText='duration'
					type='number'
					id='duration'
					value={investorChoices.duration}
					onChangeChoice={onChangeChoice}
					min={1}
				/>
			</div>
		</section>
	);
};
