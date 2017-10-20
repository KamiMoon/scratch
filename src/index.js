import _ from "lodash";
import "./style.css";
import Arrow from "./arrow.png";

import printMe from "./print.js";

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  printMe();

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Arrow;

  element.appendChild(myIcon);

  return element;
}

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
