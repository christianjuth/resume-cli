import { open, mailto } from "openurl";

/**
 * Follow me on Twitter 🐦
 */
function twitter() {
  open("https://twitter.com/christianjuth");
}

/**
 * Connect with my on LinkedIn 👔
 */
function linkedin() {
  open("https://www.linkedin.com/in/christian--j/");
}

/**
 * See my projects on GitHub 🚀
 */
function github() {
  open("https://github.com/christianjuth");
}

/**
 * Check out some of my projects ✨
 */
function projects(
  str:
    | "tic-tac-toe-ai-in-rust"
    | "dfs-sudoku-solver"
    | "react-photo-editor"
    | "graph-search-visualizer"
    | "minimax-pruning-solver"
    | "spotify-random-playlist-generator"
    | "react-state-machine-library"
) {
  switch (str) {
    case "tic-tac-toe-ai-in-rust":
      open(
        "https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=2331928209d05d2bf9d03457cfb8b0c9"
      );
      break;
    case "dfs-sudoku-solver":
      open("https://npm.christianjuth.com/sudoku-solver");
    case "react-photo-editor":
      open("https://laughing-pare-d218eb.netlify.app/");
    case "graph-search-visualizer":
      open("https://graph-search-visualizer.vercel.app/");
    case "minimax-pruning-solver":
      open("https://minimax-tree-pruning.vercel.app/");
    case "spotify-random-playlist-generator":
      open("https://spotify-random-playlist-generator.vercel.app/");
    case "react-state-machine-library":
      open("https://react-state-machines.vercel.app/");
  }
}

export const cli = {
  twitter,
  linkedin,
  github,
  projects,
};
