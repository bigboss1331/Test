import { generateQuietPrompt } from "../../../script.js";

async function handleMessage(data) {
    const text = data.message;
    const translated = await generateQuietPrompt(text);
    // ...
}
