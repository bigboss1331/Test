import { getContext } from "../../extensions.js";
import {comfy_workflow} from "../stable-diffusion/index.js"

const context = getContext();
context.chat; // Chat log
context.characters; // Character list
context.groups; // Group list
// And many more...
alert(comfy_workflow);