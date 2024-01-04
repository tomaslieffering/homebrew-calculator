function BrewTitle(props) {

	const { title, setTitle } = props;

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

	return (
		<div className="flex flex-col w-full">
			<label htmlFor="title" className="grow block text-md font-medium text-gray-900 capitalize mb-2">Brew name</label>
			<input onChange={handleChange} value={title} type="text" id="title" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5" placeholder="Brew name" />
		</div>
	);
}

export default BrewTitle