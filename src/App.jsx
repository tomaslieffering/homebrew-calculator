import { useState } from 'react';
import IngredientColumn from './components/IngredientColumn';
import TotalAmount from './components/TotalAmount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faJarWheat, faLeaf, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [ratio, setRatio] = useState(1);

  return (
    <div className='container mx-auto px-8'>
      <div className='flex flex-col gap-4 max-w-3xl mx-auto justify-center items-center font-rubik'>
        <h1 className='text-4xl text-blue-500 py-8'>
          <FontAwesomeIcon className='pr-4 text-gray-500' icon={faBeerMugEmpty} />
          Homebrew Recipe Calculator & Converter
        </h1>
        <TotalAmount setRatio={setRatio} ></TotalAmount>
        <div className="w-full p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <FontAwesomeIcon className='pr-2' icon={faPercent} />
          
          <span className="font-bold">Current recipe ratio:</span> {Math.round(( ratio * 100))}%
        </div>
        <div className='grid grid-cols-1 gap-8 w-full lg:grid-cols-2'>
          <IngredientColumn title="malt" ratio={ratio} icon={faJarWheat}/>
          <IngredientColumn title="hop" ratio={ratio} icon={faLeaf}/>
        </div>
      </div>

    </div>
  )
}

export default App
