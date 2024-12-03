import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the all plugins if adding more: (Dragging, Hover, Scolling)
gsap.registerPlugin(Draggable);

Draggable.create(".box");
Draggable.create(".piece-1");
Draggable.create(".piece-2");
Draggable.create(".piece-3");
Draggable.create(".piece-4");
// Draggable.create(".box", {
//   type: "x,y",
//   bounds: window,
//   inertia: true,
//   onDragStart: function () {
//     console.log("Drag started!");
//   },
//   onDragEnd: function () {
//     console.log("Drag ended!");
//   },
// });

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
