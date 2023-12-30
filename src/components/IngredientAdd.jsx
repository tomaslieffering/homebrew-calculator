import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import InputWithUnit from './InputWithUnit';

function IngredientAdd(props) {
	const { type, open, handleIngredientsAdd, handleOpen } = props;
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [selected, setSelected] = useState('lbs');

	const units = [
		{ 'id': 0, 'label': 'lbs' },
		{ 'id': 1, 'label': 'oz' }
	];

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setName('');
		setAmount('');
		handleIngredientsAdd(name, amount, selected);
	}


	if (open) {
		return (
			<div>
				<form onSubmit={handleSubmit} className="w-full p-4 shadow">
					<div className="mb-5">
						<div className='flex mb-2' >
							<label htmlFor="title" className="grow block text-md font-medium text-gray-900 capitalize">{type} name</label>
							<button onClick={handleOpen} className='text-red-500 hover:text-red-700' >
								<FontAwesomeIcon className="w-6 h-6" icon={faCircleXmark} />
							</button>
						</div>
						<input onChange={handleNameChange} value={name} type="text" id="title" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" />
					</div>
					<InputWithUnit handleChange={handleAmountChange} amount={amount} units={units} selected={selected} setSelected={setSelected} label="Original recipe calls for:"/>

					<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center">Add to recipe</button>
				</form>
			</div>
		)
	}

}

export default IngredientAdd;