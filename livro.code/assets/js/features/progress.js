/**
 * ==========================================================
 * LIVRO.CODE
 * Progress Manager
 * ==========================================================
 */

import CONFIG from "../core/config.js";

class ProgressManager {

    constructor() {

        this.storageKey = CONFIG.progress.storageKey;

        this.progress = [];

    }

    init() {

        this.load();

        this.registerEvents();

        this.updateUI();

    }

    load() {

        this.progress = JSON.parse(

            localStorage.getItem(this.storageKey)

        ) || [];

    }

    save() {

        localStorage.setItem(

            this.storageKey,

            JSON.stringify(this.progress)

        );

    }

    registerEvents() {

        const button = document.querySelector(

            "#completeLesson"

        );

        if (!button) return;

        button.addEventListener(

            "click",

            () => this.completeLesson()

        );

    }

    completeLesson() {

        const lesson = window.location.pathname;

        if (!this.progress.includes(lesson)) {

            this.progress.push(lesson);

            this.save();

        }

        this.updateUI();

    }

    updateUI() {

        const totalLessons = 100;

        const completed = this.progress.length;

        const percent = Math.round(

            completed / totalLessons * 100

        );

        const fill = document.querySelector(

            "#progressFill"

        );

        const percentage = document.querySelector(

            "#progressPercentage"

        );

        const lessons = document.querySelector(

            "#progressLessons"

        );

        if (fill)

            fill.style.width = `${percent}%`;

        if (percentage)

            percentage.textContent = `${percent}%`;

        if (lessons)

            lessons.textContent =

                `${completed} aulas concluídas`;

    }

}

const progressManager = new ProgressManager();

export default progressManager;