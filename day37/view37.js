
// JavaScript for Advanced DOM Manipulation

// 1. Selecting Elements
const htmlText = document.getElementById('html-text');
const toggleHtmlButton = document.getElementById('toggle-html');
const cssBox = document.getElementById('css-box');
const toggleCssButton = document.getElementById('toggle-css');
const eventButton = document.getElementById('event-listener');
const toggleHighlightButton = document.getElementById('toggle-highlight');
const paragraphs = document.querySelectorAll('p');
const itemList = document.getElementById('item-list');
const addItemButton = document.getElementById('add-item');
const removeItemButton = document.getElementById('remove-item');
const toggleText = document.getElementById('toggle-text');
const toggleVisibilityButton = document.getElementById('toggle-visibility');

// 2. Changing HTML
toggleHtmlButton.addEventListener('click', () => {
    htmlText.innerHTML = htmlText.innerHTML === 'The text has been changed!'
        ? 'This is a paragraph. Click the button to change this text.'
        : 'The text has been changed!';
});

// 3. Changing CSS
toggleCssButton.addEventListener('click', () => {
    if (cssBox.style.backgroundColor === 'rgb(255, 204, 128)') {
        cssBox.style.backgroundColor = '#e0e0e0';
        cssBox.style.color = '#333';
    } else {
        cssBox.style.backgroundColor = '#ffcc80';
        cssBox.style.color = '#000';
    }
});

// 4. Event Listeners
eventButton.addEventListener('click', () => {
    alert('Button clicked!');
});

// 5. Working with NodeLists
toggleHighlightButton.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('highlight');
    });
});

// 6. Adding and Removing Elements
addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
});

// 7. Toggle Visibility
toggleVisibilityButton.addEventListener('click', () => {
    toggleText.classList.toggle('hidden');
});

// Additional Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
});

window.addEventListener('resize', () => {
    console.log('Window resized');
});

document.addEventListener('mousemove', (event) => {
    console.log(`Mouse moved: X=${event.clientX}, Y=${event.clientY}`);
});
