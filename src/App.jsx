import { useState } from 'react'
import './App.css'

function App() {

  const [prompt, setPrompt] = useState('')
  const [maxChars, setMaxChars] = useState(200)


  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>dream</h1>
      </header>
      <form className="prompt-container">
        <label htmlFor="prompt"  setMaxChars={setMaxChars}>Prompt:</label>
        <input type="textarea" id="prompt" name="prompt" value={prompt} onChange={handlePromptChange} autoFocus/>
        {prompt.length} / {maxChars}
        <br/>
        <button className="Submit" type="submit">Submit</button>
      </form>
      <div className="image-area">image</div>
    </div>
  )
}

export default App
