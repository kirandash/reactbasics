## React Basics
### 1. Basic React syntax
React.render(React.createElement('type of element to create', properties to set, 'content of element'), target where react should render);
Ex: React.render(React.createElement('div', null, 'Hello world'), document.body);

render is a React function while createElement is a JavaScript fn

CDN links:
https://fb.me/react-0.14.0.min.js
https://fb.me/react-dom-0.14.0.min.js

### 2. JSX(JavaScript as XML) Transformer

https://unpkg.com/react@0.13.3/dist/JSXTransformer.js

Transforms JavaScript XML into plain javascript on the browser and then renders it. (Can be checked in browser Elements tab, after loading the page)

### 3. react-tools (npm packasge for preprocessing jsx files)

Check npm version: npm --version
(Install nodejs if not installed already)

Install react-tools: npm install -g react-tools
cd into project folder and run the command: jsx src/ build/

It will create a compiled js file in build folder and thus can be used in index.html file