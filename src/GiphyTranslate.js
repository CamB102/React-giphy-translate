import {useState} from 'react'

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

function GiphyTranslate(){
    const [input, setInput] = useState('')
    const [data, setData] = useState({})


    const getGiphyData = () => {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${input}&weirdness=4`)
        .then(res => res.json())
        .then(res => setData(res.data))
    }
    
    const handleInputChange = event => {
        setInput(event.target.value)
    }
    

    return (
    <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={getGiphyData}>Translate</button>
        {data.images && data.images.original && (
            <div>
                <h2>Title: {data.title}</h2>
                <img src={data.images.original.url} alt={data.title} />
            </div>
        )}
    </div>
    );
}
export default GiphyTranslate