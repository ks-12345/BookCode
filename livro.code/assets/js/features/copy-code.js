/**
 * ==========================================================
 * LIVRO.CODE
 * Copy Code
 * ----------------------------------------------------------
 * Adiciona botão de copiar automaticamente em todos
 * os blocos de código.
 * ==========================================================
 */

class CopyCode {

    constructor() {

        this.blocks = [];

    }

    init() {

        this.blocks = document.querySelectorAll("pre");

        if (!this.blocks.length) return;

        this.createButtons();

    }

    createButtons() {

        this.blocks.forEach(block => {

            if (block.querySelector(".copy-button")) return;

            const button = document.createElement("button");

            button.className = "copy-button";

            button.type = "button";

            button.innerHTML = "📋 Copiar";

            button.addEventListener(

                "click",

                () => this.copy(block, button)

            );

            block.style.position = "relative";

            block.appendChild(button);

        });

    }

    async copy(block, button) {

        const code = block.querySelector("code");

        if (!code) return;

        try {

            await navigator.clipboard.writeText(

                code.innerText

            );

            const original = button.innerHTML;

            button.innerHTML = "✅ Copiado!";

            button.classList.add("copied");

            setTimeout(() => {

                button.innerHTML = original;

                button.classList.remove("copied");

            }, 2000);

        }

        catch (error) {

            console.error(error);

        }

    }

}

const copyCode = new CopyCode();

export default copyCode;