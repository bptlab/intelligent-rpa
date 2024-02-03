

import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();


const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateRWD = async (req, res) => {
    try {
        const userProcessDescription = req.body.prompt;
        const messages = [
            {
                role: "system",
                content: "This is an example of a process with RWD. Output format: JSON."
            },
            {
                role: "user",
                content: userProcessDescription
            }
        ];
        const model = 'ft:gpt-3.5-turbo-1106:bptlab::8fCuSIVm'; 
        const completion = await openAI.chat.completions.create({
            model: model,
            messages: messages,
            max_tokens: 2000,
            response_format: { type: "json_object" },
        })
        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { generateRWD };

