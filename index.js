//import {comfy_workflow} from "../stable-diffusion/index.js"

import { registerSlashCommand } from "../../slash-commands.js";

registerSlashCommand("test", commandFunction, ["test1"], "Description shown in /help");

function commandFunction(namedArgs, unnamedArgs) {
    // Command logic
    alert("Hello World!");
}
