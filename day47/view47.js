
const methodSelect = document.getElementById("methodSelect");
const methodParameters = document.getElementById("methodParameters");
const runMethodBtn = document.getElementById("runMethod");
const demoOutput = document.getElementById("demoOutput");

// Define parameter configuration for each method
const methodConfig = {
  "length": [],
  "slice": [{ label: "start", id: "start", type: "number" }, { label: "end (optional)", id: "end", type: "number" }],
  "substring": [{ label: "start", id: "start", type: "number" }, { label: "end (optional)", id: "end", type: "number" }],
  "substr": [{ label: "start", id: "start", type: "number" }, { label: "length", id: "length", type: "number" }],
  "toUpperCase": [],
  "toLowerCase": [],
  "concat": [{ label: "String to concat", id: "str2", type: "text" }],
  "trim": [],
  "indexOf": [{ label: "Substring", id: "substr", type: "text" }, { label: "Position (optional)", id: "pos", type: "number" }],
  "lastIndexOf": [{ label: "Substring", id: "substr", type: "text" }, { label: "Position (optional)", id: "pos", type: "number" }],
  "includes": [{ label: "Substring", id: "substr", type: "text" }, { label: "Position (optional)", id: "pos", type: "number" }],
  "startsWith": [{ label: "Substring", id: "substr", type: "text" }],
  "endsWith": [{ label: "Substring", id: "substr", type: "text" }],
  "replace": [{ label: "Old", id: "old", type: "text" }, { label: "New", id: "new", type: "text" }],
  "replaceAll": [{ label: "Old", id: "old", type: "text" }, { label: "New", id: "new", type: "text" }],
  "split": [{ label: "Separator", id: "separator", type: "text" }, { label: "Limit (optional)", id: "limit", type: "number" }],
  "charAt": [{ label: "Index", id: "index", type: "number" }],
  "charCodeAt": [{ label: "Index", id: "index", type: "number" }]
};

// Update the parameter fields based on selected method
function updateMethodParameters() {
  const method = methodSelect.value;
  methodParameters.innerHTML = ""; // Clear previous fields
  if (methodConfig[method].length > 0) {
    methodConfig[method].forEach(param => {
      const label = document.createElement("label");
      label.textContent = param.label;
      label.className = "block mt-2";
      const input = document.createElement("input");
      input.type = param.type;
      input.id = param.id;
      input.className = "w-full p-2 rounded bg-gray-700 border border-gray-600";
      methodParameters.appendChild(label);
      methodParameters.appendChild(input);
    });
  }
}

// Attach event listener on change
methodSelect.addEventListener("change", updateMethodParameters);
// Initialize parameters on load
updateMethodParameters();

// Run the selected method on the demo input
runMethodBtn.addEventListener("click", function() {
  const inputStr = document.getElementById("demoInput").value;
  const method = methodSelect.value;
  let result;
  try {
    switch(method) {
      case "length":
        result = inputStr.length;
        break;
      case "slice": {
        const start = Number(document.getElementById("start").value);
        const endValue = document.getElementById("end").value;
        const end = endValue === "" ? undefined : Number(endValue);
        result = inputStr.slice(start, end);
        break;
      }
      case "substring": {
        const start = Number(document.getElementById("start").value);
        const endValue = document.getElementById("end").value;
        const end = endValue === "" ? undefined : Number(endValue);
        result = inputStr.substring(start, end);
        break;
      }
      case "substr": {
        const start = Number(document.getElementById("start").value);
        const length = Number(document.getElementById("length").value);
        result = inputStr.substr(start, length);
        break;
      }
      case "toUpperCase":
        result = inputStr.toUpperCase();
        break;
      case "toLowerCase":
        result = inputStr.toLowerCase();
        break;
      case "concat": {
        const str2 = document.getElementById("str2").value;
        result = inputStr.concat(str2);
        break;
      }
      case "trim":
        result = inputStr.trim();
        break;
      case "indexOf": {
        const substr = document.getElementById("substr").value;
        const posValue = document.getElementById("pos").value;
        const pos = posValue === "" ? undefined : Number(posValue);
        result = inputStr.indexOf(substr, pos);
        break;
      }
      case "lastIndexOf": {
        const substr = document.getElementById("substr").value;
        const posValue = document.getElementById("pos").value;
        const pos = posValue === "" ? undefined : Number(posValue);
        result = inputStr.lastIndexOf(substr, pos);
        break;
      }
      case "includes": {
        const substr = document.getElementById("substr").value;
        const posValue = document.getElementById("pos").value;
        const pos = posValue === "" ? undefined : Number(posValue);
        result = inputStr.includes(substr, pos);
        break;
      }
      case "startsWith": {
        const substr = document.getElementById("substr").value;
        result = inputStr.startsWith(substr);
        break;
      }
      case "endsWith": {
        const substr = document.getElementById("substr").value;
        result = inputStr.endsWith(substr);
        break;
      }
      case "replace": {
        const oldText = document.getElementById("old").value;
        const newText = document.getElementById("new").value;
        result = inputStr.replace(oldText, newText);
        break;
      }
      case "replaceAll": {
        const oldText = document.getElementById("old").value;
        const newText = document.getElementById("new").value;
        result = inputStr.replaceAll(oldText, newText);
        break;
      }
      case "split": {
        const separator = document.getElementById("separator").value;
        const limitValue = document.getElementById("limit").value;
        const limit = limitValue === "" ? undefined : Number(limitValue);
        result = inputStr.split(separator, limit);
        break;
      }
      case "charAt": {
        const index = Number(document.getElementById("index").value);
        result = inputStr.charAt(index);
        break;
      }
      case "charCodeAt": {
        const index = Number(document.getElementById("index").value);
        result = inputStr.charCodeAt(index);
        break;
      }
      default:
        result = "Unknown method";
    }
  } catch (err) {
    result = "Error: " + err;
  }
  demoOutput.textContent = "Result: " + JSON.stringify(result);
});
