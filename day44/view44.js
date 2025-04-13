// getAttribute
document.getElementById("btn-getAttr").addEventListener("click", function() {
  var href = document.getElementById("live-link").getAttribute("href");
  document.getElementById("result-getAttr").innerText = href;
});

// setAttribute
document.getElementById("btn-setAttr").addEventListener("click", function() {
  var div = document.getElementById("live-div");
  div.setAttribute("data-role", "user");
  div.innerText = "Attribute set: " + div.getAttribute("data-role");
});

// createElement & appendChild
document.getElementById("btn-createElement").addEventListener("click", function() {
  var newElem = document.createElement("p");
  newElem.innerText = "New Element Created!";
  document.getElementById("container-createElement").appendChild(newElem);
});

// Mouse Event: click
document.getElementById("btn-click").addEventListener("click", function() {
  document.getElementById("result-click").innerText = "Clicked!";
});

// Mouse Event: dblclick
document.getElementById("live-dblclick").addEventListener("dblclick", function() {
  this.style.backgroundColor = (this.style.backgroundColor === "rgb(255, 0, 0)") ? "rgb(107, 114, 128)" : "rgb(255, 0, 0)";
});

// Mouse Events: mouseenter & mouseleave
var mouseEnterDiv = document.getElementById("live-mouseenter");
mouseEnterDiv.addEventListener("mouseenter", function() {
  this.style.backgroundColor = "rgb(34, 197, 94)";
});
mouseEnterDiv.addEventListener("mouseleave", function() {
  this.style.backgroundColor = "rgb(107, 114, 128)";
});

// Mouse Event: mousemove
document.getElementById("live-mousemove").addEventListener("mousemove", function(e) {
  document.getElementById("result-mousemove").innerText = "X: " + e.clientX + ", Y: " + e.clientY;
});

// Mouse Event: wheel
document.getElementById("live-wheel").addEventListener("wheel", function(e) {
  e.preventDefault();
  this.style.backgroundColor = "rgb(59, 130, 246)";
});

// Keyboard Events: keydown, keypress, keyup
var inputKey = document.getElementById("input-key");
inputKey.addEventListener("keydown", function(e) {
  document.getElementById("result-key").innerText = "keydown: " + e.key;
});
inputKey.addEventListener("keypress", function(e) {
  document.getElementById("result-key").innerText += " | keypress: " + e.key;
});
inputKey.addEventListener("keyup", function(e) {
  document.getElementById("result-key").innerText += " | keyup: " + e.key;
});

// Focus & Blur Events
var inputFocus = document.getElementById("input-focus");
inputFocus.addEventListener("focus", function() {
  this.style.borderColor = "rgb(16, 185, 129)";
});
inputFocus.addEventListener("blur", function() {
  this.style.borderColor = "";
});

// Scroll Event
document.getElementById("live-scroll").addEventListener("scroll", function() {
  document.getElementById("result-scroll").innerText = "Scroll Top: " + this.scrollTop;
});

// Resize Event (window)
window.addEventListener("resize", function() {
  document.getElementById("result-resize").innerText = window.innerWidth + " x " + window.innerHeight;
});

// Drag & Drop Events
var dragItem = document.getElementById("drag-me");
var dropZone = document.getElementById("drop-zone");
dragItem.addEventListener("dragstart", function(e) {
  e.dataTransfer.setData("text/plain", "dragged");
});
dropZone.addEventListener("dragover", function(e) {
  e.preventDefault();
});
dropZone.addEventListener("drop", function(e) {
  e.preventDefault();
  document.getElementById("result-dragDrop").innerText = "Dropped!";
});

// Touch Events
var touchDiv = document.getElementById("div-touch");
touchDiv.addEventListener("touchstart", function(e) {
  this.style.backgroundColor = "rgb(219, 39, 119)";
});
touchDiv.addEventListener("touchend", function(e) {
  this.style.backgroundColor = "rgb(249, 115, 22)";
});

// Pointer Events
var pointerDiv = document.getElementById("live-pointer");
pointerDiv.addEventListener("pointerdown", function(e) {
  document.getElementById("result-pointer").innerText = "pointerdown: " + e.pointerType;
});
pointerDiv.addEventListener("pointerup", function(e) {
  document.getElementById("result-pointer").innerText = "pointerup: " + e.pointerType;
});
pointerDiv.addEventListener("pointermove", function(e) {
  document.getElementById("result-pointer").innerText = "pointermove: " + e.pointerType;
});

// Transition Event
document.getElementById("btn-transition").addEventListener("click", function() {
  var box = document.getElementById("div-transition");
  box.style.width = (box.style.width === "100px") ? "200px" : "100px";
});
document.getElementById("div-transition").addEventListener("transitionend", function() {
  document.getElementById("result-transition").innerText = "Transition ended";
});

// Animation Event
document.getElementById("btn-animation").addEventListener("click", function() {
  var animBox = document.getElementById("div-animation");
  animBox.style.animation = "demoAnimation 2s";
});
document.getElementById("div-animation").addEventListener("animationstart", function() {
  document.getElementById("result-animation").innerText = "Animation started";
});
document.getElementById("div-animation").addEventListener("animationend", function() {
  document.getElementById("result-animation").innerText = "Animation ended";
  this.style.animation = "";
});

// Inject keyframes for animation
var styleElem = document.createElement("style");
styleElem.innerHTML = `
  @keyframes demoAnimation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleElem);

// MutationObserver Example
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log("Mutation observed:", mutation);
  });
});
observer.observe(document.getElementById("mutation-container"), { childList: true });
document.getElementById("btn-mutate").addEventListener("click", function() {
  var newChild = document.createElement("div");
  newChild.innerText = "New Mutation Child";
  newChild.className = "p-2 bg-gray-600 mt-2";
  document.getElementById("mutation-container").appendChild(newChild);
});
