import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function IngredientOutput(props) {
	const { ingredient, type, ratio, handleIngredientsRemove } = props;

	const doConversion = (ingredient) => {
		if (ingredient.unit == "oz") {
			return `${Math.round((ingredient.amount * 28.35 * ratio) * 100) / 100} g`
		}
		else if (ingredient.unit == "lbs") {
			return `${Math.round((ingredient.amount / 2.205 * ratio) * 100) / 100} kg`
		}
	}

	return (
		<div className="py-4 border-b border-gray-200">
			<div className={`p-4 shadow-md rounded-lg w-full ${type === "malt" ? "bg-red-100" : "bg-green-100"}`} >
				<div className='flex'>
					<span htmlFor={ingredient.name} className="grow block mb-2 text-lg font-medium text-gray-900">
						{ingredient.name}: {ingredient.id}
					</span>
					<button className='text-red-500 hover:text-red-700' onClick={handleIngredientsRemove(ingredient.id)}>
						<FontAwesomeIcon className="w-6 h-6" icon={faCircleXmark} />
					</button>
				</div>
				<div className="block mb-2 text-lg font-medium text-gray-900">
					Original recipe calls for:
					<span>&nbsp;</span>
					<span className="font-bold">
						{ingredient.amount} {ingredient.unit}
					</span>
				</div>

				<div className="block mb-2 text-lg font-medium text-gray-900">
					For your recipe:
					<span>&nbsp;</span>
					<span className="font-bold">
						{doConversion(ingredient)}
					</span>
				</div>
			</div>
		</div>

	);
}

export default IngredientOutput;