import { useState } from 'react'
import './App.css'



function App() {

  const [prompt, setPrompt] = useState('')
  const [maxChars, setMaxChars] = useState(200)




  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }
  // create an async function to send the prompt to the openai api

  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(prompt)
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>dream</h1>
      </header>
      <hr/>
      <div className='imageArea'>
        <div className='Image'></div>
      </div>
      <hr/>
      <form className="prompt-container">
        <label htmlFor="prompt"  setMaxChars={setMaxChars}>Prompt:</label>
        <input type="textarea" id="prompt" name="prompt" value={prompt} onChange={handlePromptChange} autoFocus maxLength={200}/>
        {prompt.length} / {maxChars}
        <br/>
        <button className="Submit" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
