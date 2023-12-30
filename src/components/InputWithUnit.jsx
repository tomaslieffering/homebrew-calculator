import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function InputWithUnit(props) {
	const { handleChange, amount, units, selected, setSelected, label } = props;

	const [dropdown, setDropdown] = useState(false);

	const handleDropdown = () => {
		setDropdown(!dropdown);
	}

	const handleDropdownClick = (e) => {
		setSelected(e.target.innerHTML);
		setDropdown(!dropdown);
	}

	return (
		<div className="relative flex flex-col w-full mb-5">
			<label htmlFor="amount" className="block mb-2 text-md font-medium text-gray-900">{label}</label>
			<div className='flex h-10'>
				<input onChange={handleChange} value={amount} type="number" id="amount" className="block text-right p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg rounded-s-gray-100 border border-gray-300" placeholder="Amount" />

				<button onClick={handleDropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border rounded-e-lg border-s-0 border-gray-300 " type="button">
					<span className='pr-2 w-8' >{selected}</span>
					<FontAwesomeIcon icon={faChevronDown} />
				</button>

				{dropdown ? (
					<div className='absolute flex justify-end w-full z-2'>
						<div id="dropdown" className="z-10 mt-10 bg-white divide-y divide-gray-100 rounded-e-lg shadow w-fit dark:bg-gray-700">
							<ul onClick={handleDropdownClick} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
								{units.map((unit) =>
									<li key={unit.id}>
										<span className="text-right block px-4 py-2 hover:bg-gray-100">{unit.label}</span>
									</li>
								)}
							</ul>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default InputWithUnit;