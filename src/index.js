import './style.css';

const root = document.querySelector('#root');
const h3 = document.createElement('h1');
h3.textContent = 'Hello World from index.js';
root.appendChild(h3);

document.body.style.backgroundColor = 'yellow';