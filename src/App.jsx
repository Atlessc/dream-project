import { useState } from 'react'
import './App.css'

// create a prompt component that then displays the prompt in the image area and also has a button to submit the prompt and then display the image

function App() {

  const [prompt, setPrompt] = useState('')
  const [maxChars, setMaxChars] = useState(200)




  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }
  
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
        <input type="textarea" id="prompt" name="prompt" value={prompt} onChange={handlePromptChange} autoFocus/>
        {prompt.length} / {maxChars}
        <br/>
        <button className="Submit" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
