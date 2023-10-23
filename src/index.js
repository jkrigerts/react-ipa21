import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// No reālā HTML paņemu vienīgo elementu
const noHTML = document.getElementById("❤️");

// Parasto elementu pārtaisīt par React
// 1. elementu
const root = ReactDOM.createRoot(noHTML);

// React elementā parādīt React komponenti
root.render(<App />);
