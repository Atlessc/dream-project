import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
    const prompt = req.body.prompt;
    const aiResponse = await openai.complete({
        prompt,
        n: 1,
        size: '1024x1024',
    });

    const image = aiResponse.data.choices[0].url;

    res.json({ image });
});

app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));