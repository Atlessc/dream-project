// create an image completion api with the davinci model, 300 tokens, 0.9 temperature, and the prompt value coming from the input element with the ID "prompt"

const getImage = async () => {
    fetch('https://api.openai.com/v1/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer' {OPENAI}
        }
        })
}