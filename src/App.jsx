import { useState } from 'react';
import IngredientColumn from './components/IngredientColumn';
import TotalAmount from './components/TotalAmount';
import Pdf from './components/Pdf';
import BrewerNotes from './components/BrewerNotes';
import BrewTitle from './components/BrewTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faJarWheat, faLeaf, faBeerMugEmpty, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App() {
  const [malt, setMalt] = useState([]);
  const [hop, setHop] = useState([]);

  const [ratio, setRatio] = useState(1);
  const [recipeAmount, setRecipeAmount] = useState('10');
  const [yourAmount, setYourAmount] = useState('38');
  const [recipeSelected, setRecipeSelected] = useState('gal');
  const [yourSelected, setYourSelected] = useState('lt');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const [pdf, setPdf] = useState(false);

  const generatePdf = () => {
    return (<Pdf ratio={ratio} recipeAmount={recipeAmount} yourAmount={yourAmount}
      recipeSelected={recipeSelected} yourSelected={yourSelected} malts={malt} hops={hop}
      title={title} notes={notes}
    />)
  }

  const loadPdf = () => {
    setPdf(!pdf);
  }

  return (
    <div className='container mx-auto px-8'>
      <div className='flex flex-col gap-4 max-w-3xl mx-auto justify-center items-center font-rubik'>
        <h1 className='text-4xl text-blue-500 py-8 text-center'>
          <FontAwesomeIcon className='pr-4 text-gray-500' icon={faBeerMugEmpty} />
          Homebrew Recipe Calculator & Converter
        </h1>
        <BrewTitle title={title} setTitle={setTitle}></BrewTitle>
        <TotalAmount setRatio={setRatio} recipeAmount={recipeAmount} setRecipeAmount={setRecipeAmount}
          yourAmount={yourAmount} setYourAmount={setYourAmount} recipeSelected={recipeSelected}
          setRecipeSelected={setRecipeSelected} yourSelected={yourSelected} setYourSelected={setYourSelected} ></TotalAmount>
        <div className="w-full p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
          <FontAwesomeIcon className='pr-2' icon={faPercent} />

          <span className="font-bold">Current recipe ratio:</span> {Math.round((ratio * 100))}%
        </div>
        <div className='grid grid-cols-1 gap-8 w-full lg:grid-cols-2'>
          <IngredientColumn title="malt" ratio={ratio} icon={faJarWheat} ingredients={malt} setIngredients={setMalt} />
          <IngredientColumn title="hop" ratio={ratio} icon={faLeaf} ingredients={hop} setIngredients={setHop} />
        </div>
        <BrewerNotes notes={notes} setNotes={setNotes}></BrewerNotes>

        <div className='self-end pb-16'>
          {pdf ? (
            <PDFDownloadLink className='flex text-white bg-blue-700 font-medium rounded-full text-md px-5 py-2.5 text-center hover:bg-blue-800' document={generatePdf()} fileName={title + ".pdf"}>
              <div>
                <FontAwesomeIcon className='pr-8 h-full' icon={faFilePdf} />
              </div>
              Download recipe as PDF
            </PDFDownloadLink>
          ) :
            <button onClick={loadPdf} className='flex text-white bg-blue-700 font-medium rounded-full text-md px-5 py-2.5 text-center hover:bg-blue-800'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='pr-8 h-full' icon={faFilePdf} />
              </div>
              Convert recipe to PDF
            </button>
          }
        </div>
      </div>

    </div>
  )
}

export default App
