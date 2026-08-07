/**
 * ==========================================================
 * LIVRO.CODE
 * Table Of Contents
 * ==========================================================
 */

class TableOfContents {

    constructor() {

        this.container = null;

        this.headings = [];

        this.observer = null;

    }

    init() {

        this.container = document.querySelector("#tocContent");

        if (!this.container) return;

        this.collectHeadings();

        this.render();

        this.observeSections();

    }

    /**
     * Procura todos os títulos da página
     */
    collectHeadings() {

        this.headings = [

            ...document.querySelectorAll(

                "main h2, main h3, main h4"

            )

        ];

    }

    /**
     * Cria IDs automaticamente
     */
    createId(text) {

        return text

            .toLowerCase()

            .trim()

            .replace(/\s+/g, "-")

            .replace(/[^\w-]/g, "");

    }

    /**
     * Renderiza menu
     */
    render() {

        this.container.innerHTML = "";

        this.headings.forEach(title => {

            if (!title.id) {

                title.id = this.createId(

                    title.textContent

                );

            }

            const link = document.createElement("a");

            link.href = `#${title.id}`;

            link.textContent = title.textContent;

            link.className = `toc-link ${title.tagName.toLowerCase()}`;

            this.container.appendChild(link);

        });

    }

    /**
     * Destaca seção atual
     */
    observeSections() {

        const options = {

            rootMargin: "-20% 0px -70% 0px"

        };

        this.observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    const link = document.querySelector(

                        `.toc-link[href="#${entry.target.id}"]`

                    );

                    if (!link) return;

                    if (entry.isIntersecting) {

                        document

                            .querySelectorAll(".toc-link")

                            .forEach(item =>

                                item.classList.remove("active")

                            );

                        link.classList.add("active");

                    }

                });

            },

            options

        );

        this.headings.forEach(

            heading => this.observer.observe(heading)

        );

    }

}

const toc = new TableOfContents();

export default toc;