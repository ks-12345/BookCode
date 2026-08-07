/**
 * ==========================================================
 * LIVRO.CODE
 * Search Engine
 * ==========================================================
 */

import CONFIG from "../core/config.js";

class Search {

    constructor() {

        this.data = [];

        this.input = null;

        this.results = null;

    }

    async init() {

        this.input = document.querySelector("#searchInput");

        this.results = document.querySelector("#searchResults");

        await this.loadData();

        this.registerEvents();

    }

    async loadData() {

        try {

            const response = await fetch(

                `${CONFIG.data.path}/content/search-index.json`

            );

            this.data = await response.json();

        }

        catch (error) {

            console.error(

                "Erro ao carregar índice de pesquisa",

                error

            );

        }

    }

    registerEvents() {

        if (!this.input) return;

        this.input.addEventListener(

            "input",

            (event) => {

                this.search(event.target.value);

            }

        );

        document.addEventListener(

            "keydown",

            (event) => {

                if (event.ctrlKey && event.key.toLowerCase() === "k") {

                    event.preventDefault();

                    this.input.focus();

                }

            }

        );

    }

    search(query) {

        if (query.length < CONFIG.search.minCharacters) {

            this.results.innerHTML = "";

            return;

        }

        query = query.toLowerCase();

        const results = this.data.filter(item => {

            return (

                item.title.toLowerCase().includes(query)

                ||

                item.description.toLowerCase().includes(query)

                ||

                item.category.toLowerCase().includes(query)

                ||

                item.keywords.join(" ").toLowerCase().includes(query)

            );

        });

        this.render(results.slice(0, CONFIG.search.maxResults));

    }

    render(results) {

        if (!results.length) {

            this.results.innerHTML =

                "<p>Nenhum resultado encontrado.</p>";

            return;

        }

        this.results.innerHTML =

            results.map(item => `

                <a
                    class="search-item"
                    href="${item.url}">

                    <small>${item.category}</small>

                    <h4>${item.title}</h4>

                    <p>${item.description}</p>

                </a>

            `).join("");

    }

}

const search = new Search();

export default search;