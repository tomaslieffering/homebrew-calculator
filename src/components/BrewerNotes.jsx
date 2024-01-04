import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function BrewerNotes(props) {
	const {notes, setNotes} = props
	
	const handleChange = (e) => {
		setNotes(e.target.value);
	}

	return (
		<div className='flex flex-col w-full'>

			<label htmlFor="note" className="block mb-2 text-md font-medium text-gray-900">
				<FontAwesomeIcon className='pr-2' icon={faBook} />
				Brewer notes
			</label>
			<textarea onChange={handleChange} value={notes} id="note" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Your notes here..."></textarea>

		</div>
	)
}

export default BrewerNotes;