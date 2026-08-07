/**
 * ==========================================================
 * LIVRO.CODE
 * Configurações Globais
 * ----------------------------------------------------------
 * Todas as configurações do sistema ficam centralizadas aqui.
 * ==========================================================
 */

const CONFIG = {

    /**
     * Informações do projeto
     */
    app: {

        name: "Livro.Code",

        version: "1.0.0",

        author: "Livro.Code",

        description:
            "Plataforma gratuita para aprender programação.",

        url: window.location.origin

    },

    /**
     * Tema
     */
    theme: {

        default: "light",

        storageKey: "livrocode-theme"

    },

    /**
     * Componentes
     */
    components: {

        path: "/components",

        extension: ".html"

    },

    /**
     * Dados JSON
     */
    data: {

        path: "/data"

    },

    /**
     * Pesquisa
     */
    search: {

        minCharacters: 2,

        maxResults: 10,

        debounce: 300

    },

    /**
     * Router
     */
    router: {

        smoothScroll: true,

        activeClass: "active"

    },

    /**
     * Progresso do usuário
     */
    progress: {

        storageKey: "livrocode-progress"

    },

    /**
     * Favoritos
     */
    favorites: {

        storageKey: "livrocode-favorites"

    },

    /**
     * Configurações de desenvolvimento
     */
    development: {

        debug: true,

        showLogs: true

    }

};

export default CONFIG;