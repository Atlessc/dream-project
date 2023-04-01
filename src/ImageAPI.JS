// create an image completion api with the davinci model, 300 tokens, 0.9 temperature, and the prompt value coming from the input element with the ID "prompt"

const getImage = async () => {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY_HERE'
      },
      body: JSON.stringify({
        "model": "image-alpha-001",
        "prompt": props.prompt,
        "num_images": 1,
        "size": "512x512",
        "response_format": "url"
      })
    });
    const data = await response.json();
    setImageLink(data.data[0].url);
  }

