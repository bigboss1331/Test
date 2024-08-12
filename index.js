import { getContext } from "../../extensions.js";
//import {comfy_workflow} from "../stable-diffusion/index.js"
import { generateQuietPrompt } from "../../../script.js";


const context = getContext();
context.chat; // Chat log
context.characters; // Character list
context.groups; // Group list
// And many more...

function handleMessage(data) {
    const text = data.message;
    const translated = await generateQuietPrompt(text);
    // ...
}