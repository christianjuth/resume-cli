"use strict";
exports.__esModule = true;
exports.cli = void 0;
var openurl_1 = require("openurl");
/**
 * Follow me on Twitter 🐦
 */
function twitter() {
    (0, openurl_1.open)("https://twitter.com/christianjuth");
}
/**
 * Connect with my on LinkedIn 👔
 */
function linkedin() {
    (0, openurl_1.open)("https://www.linkedin.com/in/christian--j/");
}
/**
 * See my projects on GitHub 🚀
 */
function github() {
    (0, openurl_1.open)("https://github.com/christianjuth");
}
/**
 * Check out some of my projects ✨
 */
function projects(str) {
    switch (str) {
        case "tic-tac-toe-ai-in-rust":
            (0, openurl_1.open)("https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=2331928209d05d2bf9d03457cfb8b0c9");
            break;
        case "dfs-sudoku-solver":
            (0, openurl_1.open)("https://npm.christianjuth.com/sudoku-solver");
        case "react-photo-editor":
            (0, openurl_1.open)("https://laughing-pare-d218eb.netlify.app/");
        case "graph-search-visualizer":
            (0, openurl_1.open)("https://graph-search-visualizer.vercel.app/");
        case "minimax-pruning-solver":
            (0, openurl_1.open)("https://minimax-tree-pruning.vercel.app/");
        case "spotify-random-playlist-generator":
            (0, openurl_1.open)("https://spotify-random-playlist-generator.vercel.app/");
        case "react-state-machine-library":
            (0, openurl_1.open)("https://react-state-machines.vercel.app/");
    }
}
exports.cli = {
    twitter: twitter,
    linkedin: linkedin,
    github: github,
    projects: projects
};
