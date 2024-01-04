import { useEffect } from 'react';
import InputWithUnit from "./InputWithUnit";

function TotalAmount(props) {

	const units = [
		{ 'id': 0, 'label': 'gal' },
		{ 'id': 1, 'label': 'lt' }
	];

	const { setRatio, recipeAmount, setRecipeAmount, yourAmount, setYourAmount, recipeSelected, setRecipeSelected, yourSelected, setYourSelected } = props;

	useEffect(() => {
    if (recipeSelected == yourSelected) {
			console.log(recipeAmount, yourAmount);
			setRatio(yourAmount / recipeAmount);
		}
		else if (recipeSelected == 'gal') {
			setRatio(yourAmount /(recipeAmount * 3.785));
		}
		else if (yourSelected == 'gal') {
			setRatio((yourAmount * 3.785) / recipeAmount);
		}
  }, [recipeAmount, yourAmount, recipeSelected, yourSelected, setRatio]);

	const handleRecipeChange = (e) => {
		setRecipeAmount(e.target.value);
	}

	const handleYourChange = (e) => {
		setYourAmount(e.target.value);
	}

	return (
		<div className="flex flex-col lg:flex-row w-full gap-4">
			<InputWithUnit handleChange={handleRecipeChange} amount={recipeAmount} units={units} selected={recipeSelected} setSelected={setRecipeSelected} label="Original recipe's final volume"/>
			<InputWithUnit handleChange={handleYourChange} amount={yourAmount} units={units} selected={yourSelected} setSelected={setYourSelected} label="Your recipe's desired volume"/>
		</div>
	);
}

export default TotalAmount;