
const all = document.getElementById("All");

const js = document.getElementById("JavaScript")
const dsa = document.getElementById("DSA")
const dev = document.getElementById("Development")

const jsClass = document.querySelectorAll(".JS");
const dsaClass = document.querySelectorAll(".DSA");
const devClass = document.querySelectorAll(".DEV");

const section = document.querySelector(".section");

all.addEventListener("click", () => {
    section.innerHTML = "";
    [...jsClass, ...dsaClass, ...devClass].forEach((item) => {
        section.appendChild(item);
    });
});

js.addEventListener("click", () => {
    section.innerHTML = "";
    [...jsClass].forEach((item) => {
        section.appendChild(item);
    });
})

dsa.addEventListener("click", () => {
    section.innerHTML = "";
    [...dsaClass].forEach((item) => {
        section.appendChild(item);
    });
})
dev.addEventListener("click", () => {
    section.innerHTML = "";
    [...devClass].forEach((item) => {
        section.appendChild(item);
    });
})



