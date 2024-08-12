import { generateQuietPrompt } from "../../../script.js";

function handleMessage(data) {
    const text = data.message;
    const translated = await generateQuietPrompt(text);
    // ...
}
