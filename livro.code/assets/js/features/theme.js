/**
 * ==========================================================
 * LIVRO.CODE
 * Theme Manager
 * ----------------------------------------------------------
 * Controla o tema claro e escuro da aplicação.
 * ==========================================================
 */

import CONFIG from "../core/config.js";

class ThemeManager {

    constructor() {

        this.storageKey = CONFIG.theme.storageKey;

        this.defaultTheme = CONFIG.theme.default;

        this.button = null;

    }

    /**
     * Inicializa o sistema
     */
    init() {

        this.button = document.querySelector("#themeButton");

        this.loadTheme();

        this.registerEvents();

    }

    /**
     * Registra eventos
     */
    registerEvents() {

        if (!this.button) return;

        this.button.addEventListener("click", () => {

            this.toggleTheme();

        });

    }

    /**
     * Alterna tema
     */
    toggleTheme() {

        const currentTheme = document.documentElement.dataset.theme;

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        this.setTheme(newTheme);

    }

    /**
     * Define tema
     */
    setTheme(theme) {

        document.documentElement.dataset.theme = theme;

        localStorage.setItem(

            this.storageKey,

            theme

        );

        this.updateButton(theme);

    }

    /**
     * Carrega tema salvo
     */
    loadTheme() {

        let theme = localStorage.getItem(

            this.storageKey

        );

        if (!theme) {

            theme = window.matchMedia(

                "(prefers-color-scheme: dark)"

            ).matches

                ? "dark"

                : this.defaultTheme;

        }

        this.setTheme(theme);

    }

    /**
     * Atualiza ícone
     */
    updateButton(theme) {

        if (!this.button) return;

        this.button.textContent =

            theme === "dark"

                ? "☀️"

                : "🌙";

        this.button.title =

            theme === "dark"

                ? "Modo Claro"

                : "Modo Escuro";

    }

}

const themeManager = new ThemeManager();

export default themeManager;