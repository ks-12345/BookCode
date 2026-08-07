import componentLoader from "./component-loader.js";
import router from "./router.js";

import themeManager from "../features/theme.js";
import search from "../features/search.js";
import toc from "../features/toc.js";
import copyCode from "../features/copy-code.js";
import progressManager from "../features/progress.js";

document.addEventListener(

    "DOMContentLoaded",

    async () => {

        await componentLoader.init();

        router.init();

        themeManager.init();

        await search.init();

        toc.init();

        copyCode.init();

        progressManager.init();

    }

);