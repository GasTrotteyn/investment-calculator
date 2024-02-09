import { formatter, calculateInvestmentResults } from '../util/investment';

export const Results = ({ investorChoices }) => {
	const resultsList = calculateInvestmentResults(investorChoices);
	const initialInvestment =
		resultsList[0].valueEndOfYear - resultsList[0].interest - resultsList[0].annualInvestment;
	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Invest Value</th>
					<th>{`Interest (Year)`}</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultsList.map((yr) => {
					const totalInterest =
						yr.valueEndOfYear - yr.annualInvestment * yr.year - initialInvestment;
					const totalAmountInvested = yr.valueEndOfYear - totalInterest;
					return (
						<tr key={yr.year}>
							<td>{yr.year}</td>
							<td>{formatter.format(yr.valueEndOfYear)}</td>
							<td>{formatter.format(yr.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
