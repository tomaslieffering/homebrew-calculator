import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import IngredientAdd from "./IngredientAdd";
import IngredientOutput from "./IngredientOutput";

let ingredientsId = 0;

function IngredientsColumn(props) {


	const { title, ratio, icon } = props;

	const [ingredients, setIngredients] = useState([]);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	}

  const handleIngredientsAdd = (name, amount, unit) => {
		setOpen(!open);
		ingredientsId++;
    setIngredients(
      [
        ...ingredients,
        { 'id': ingredientsId, 'name': name, 'amount': amount, 'unit': unit}
      ]
    );
  }

	const handleIngredientsRemove = (id) => () => {
		const updatedIngredients = ingredients.filter((ingredient) => {
			return ingredient.id !== id;
		});
	
		setIngredients(updatedIngredients);
	};

	return (
		<div className='flex flex-col w-full'>
			<div className='flex w-full mb-4'>
				<div className="flex items-center pr-2">
					<FontAwesomeIcon icon={icon} />
				</div>
				<h2 className='grow flex items-center text-lg font-bold capitalize pr-2'>{title}<span className="lowercase">(s)</span></h2>
				<button onClick={handleOpen} className='flex text-white bg-blue-700 font-medium rounded-full text-md px-5 py-2.5 text-center hover:bg-blue-800'>
					<span className='pr-4'>Add {title} to recipe</span>
					<div className='flex items-center h-full'>
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</button>
			</div>
			<IngredientAdd type={title} open={open} handleIngredientsAdd={handleIngredientsAdd} handleOpen={handleOpen}/>
			{ingredients.map((ingredient) => <IngredientOutput key={ingredient.id} ingredient={ingredient} type={title} ratio={ratio} handleIngredientsRemove={handleIngredientsRemove}/>)}
		</div>
	)
}

export default IngredientsColumn;