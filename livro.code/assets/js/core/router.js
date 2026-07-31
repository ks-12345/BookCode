/**
 * ==========================================================
 * LIVRO.CODE
 * Router
 * ----------------------------------------------------------
 * Responsável pela navegação do site.
 * ==========================================================
 */

class Router {

    constructor() {

        this.currentPath = window.location.pathname;

    }

    /**
     * Inicializa o Router
     */
    init() {

        this.highlightActiveLinks();

        this.updatePageTitle();

        this.scrollToAnchor();

    }

    /**
     * Destaca links ativos
     */
    highlightActiveLinks() {

        const links = document.querySelectorAll("a[href]");

        links.forEach(link => {

            const href = new URL(link.href).pathname;

            if (href === this.currentPath) {

                link.classList.add("active");

            }

        });

    }

    /**
     * Atualiza o título da página
     */
    updatePageTitle() {

        const pageTitle = document.querySelector("h1");

        if (!pageTitle) return;

        document.title = `${pageTitle.textContent} | Livro.Code`;

    }

    /**
     * Scroll para âncoras
     */
    scrollToAnchor() {

        if (!window.location.hash) return;

        const element = document.querySelector(

            window.location.hash

        );

        if (!element) return;

        setTimeout(() => {

            element.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    }

}

const router = new Router();

export default router;