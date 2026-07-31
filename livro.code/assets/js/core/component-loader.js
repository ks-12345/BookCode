/**
 * ==========================================================
 * LIVRO.CODE
 * Component Loader
 * ----------------------------------------------------------
 * Carrega componentes HTML dinamicamente.
 * Exemplo:
 *
 * <div data-component="layout/navbar"></div>
 *
 * ==========================================================
 */

class ComponentLoader {

    constructor() {

        this.cache = new Map();

    }

    /**
     * Carrega um componente
     */
    async load(element) {

        const component = element.dataset.component;

        if (!component) return;

        const url = `/components/${component}.html`;

        try {

            let html;

            if (this.cache.has(url)) {

                html = this.cache.get(url);

            } else {

                const response = await fetch(url);

                if (!response.ok) {

                    throw new Error(
                        `Erro ao carregar ${url}`
                    );

                }

                html = await response.text();

                this.cache.set(url, html);

            }

            element.innerHTML = html;

        }

        catch (error) {

            console.error(error);

            element.innerHTML = `
                <div class="alert alert-danger">

                    <strong>Erro</strong>

                    Não foi possível carregar:

                    <code>${component}</code>

                </div>
            `;

        }

    }

    /**
     * Carrega todos os componentes
     */
    async init() {

        const components = document.querySelectorAll(

            "[data-component]"

        );

        await Promise.all(

            [...components].map(

                component => this.load(component)

            )

        );

    }

}

const componentLoader = new ComponentLoader();

export default componentLoader;