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

### 4. Creating a component
note that the component name must start with a capital letter
After creating a component (BGComponent), in order to use them multiple times: please note that adjacent JSX elements must be wrapped in an enclosing tag. Ex:
<div><BGComponent/><BGComponent/><BGComponent/></div>

### 5. Setting and Getting Properties of a Component
{this.props.variablename} - to get a variable data
{this.props.children} - to get all the content from child

### 6. Creating a To Do Application with React & Setting events
jsx js/ build/

Setting events:  onClick={this.edit}

### 7. Creating State
getInitialState, onChange, defaultChecked

### 8. To Do App - Adding State - Initial, Edit and save
getInitialState, renderDefaultCard, renderForm

### 9. refs - To save value of textarea
ref="savedText"
var txt = this.refs.savedText.getDOMNode().value;

### 10. propTypes - To handle validations and creating a to do list
propTypes

### 11. Setting Child elements of todo tasks inside todo list
ToDoList > ToDo
Note that child(todo) can inherit states from their parents(todolist)

### 12. props - To edit and remove tasks
this.props.onEdit

### 13. Add Task

### 14. Random Styling of tasks with the help of keys

### 15. Component Life Cycle
1. Mounting
getDefaultProps - Called once for props
getInitialState - Called once for states
componentWillMount - Will call right before the render - last chance to modify the state before rendering
render - last method called
componentDidMount - called after succesful rendering of Component

2. Updating
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidMount

3. Unmounting
componentWillUnmount - will call right before component is unmounted. Helps in clearing DOMs, timers etc.

### 16. Mounting Components
componentWillMount, componentDidMount, unmountComponentAtNode

### 17. Setting properties with getDefaultProps
getDefaultProps
style={this.props}

### 18. Updating component
componentWillReceiveProps - allows us to pass props to a component
getInitialState & getDefaultProps

### 19. Creating draggable tasks and default todo tasks
$(this.getDOMNode()).draggable();

http://baconipsum.com/api/?type=all-meat&sentences

### 20. Launching the TO DO application as Full stack app
npm, package.json, CommonJS, httpster, react-tools

### 21. Hosting the app with npm and httpster
npm init in project folder

npm install --save httpster (Light weight server)
npm install --save react-tools (JSX Pre processing)

package.json
"scripts": {
"start": "open http://localhost:9099 & httpster -p 9099"
}

Divide the files 
and then run
jsx js/ build/

npm start