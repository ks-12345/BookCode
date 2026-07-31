import componentLoader from "./component-loader.js";
import router from "./router.js";

document.addEventListener(

    "DOMContentLoaded",

    async () => {

        await componentLoader.init();

        router.init();

    }

);