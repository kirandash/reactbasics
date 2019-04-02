var ToDo = React.createClass({displayName: "ToDo",
    getInitialState: function(){
        // Allows us to set a default state for our node
        return {editing: false} // Initially we want the default card 
    },
    componentWillMount: function(){
        // A react fn that triggers right before the first render
        this.style = {
            right: this.randomNumber(0, window.innerWidth - 250 ) + 'px',
            top: this.randomNumber(0, window.innderHeight - 250 ) + 'px', // 250 = 200 height + margin on both sides of 25
            transform: 'rotate(' + this.randomNumber(-15, 15) + 'deg)'
        };
    },
    randomNumber: function(min, max){
        // Generate a random number between min and max
        return (min + Math.ceil(Math.random() * max));
    },
    render: function() {
        if(this.state.editing){
            // On clicking edit render the form
            return this.renderForm();
        }else{
            // Initially render the default card
            return this.renderDefaultCard();
        }
    },
    renderDefaultCard: function() {
        return (
            React.createElement("div", {className: "todo", style: this.style}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil", onClick: this.edit}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash", onClick: this.delete})
            )
        )
    },
    renderForm: function() {
        return (
            React.createElement("div", {className: "todo", style: this.style}, 
                React.createElement("textarea", {defaultValue: this.props.children, ref: "savedText", className: "form-control"}), 
                React.createElement("button", {className: "btn btn-success btn-sm glyphicon glyphicon-floppy-disk", onClick: this.save})
            )
        )
    },
    edit: function() {
        console.log('Editing task');
        this.setState({editing: true});
    },
    save: function() {
        console.log('Task saved');
        var txt = this.refs.savedText.getDOMNode().value;
        console.log('The saved text is ' + txt);
        this.props.onEdit(this.refs.savedText.getDOMNode().value, this.props.index); // Call onEdit event from TODOList
        this.setState({editing: false});
    },
    delete: function() {
        console.log('Task deleted!');
        this.props.onDelete(this.props.index); // Call onDelete event from TODOList
    }
});

// Create List of TO DO tasks
var ToDoList = React.createClass({displayName: "ToDoList",
    propTypes: {
        count: function(props, propName) {
            if(typeof props[propName] !== "number") {
                return new Error('The count property must be a number!');
            }
            if(props[propName] > 20) {
                return new Error('You can not create ' + props[propName] + '. Since you have reached your limit of 20!');
            }
        }
    },
    getInitialState: function(){
        return {
            tasks: [
                {'id': 0, 'todo': 'Attend morning stand up calls'},
                {'id': 1, 'todo': 'Push code to production'},
                {'id': 2, 'todo': 'Attend evening meetings'},
                {'id': 3, 'todo': 'Go Gym'}
            ]
        }
    },
    incrementId: function() {
        this.id  = this.id || 3;
        return this.id++;
    },
    addToList: function(newText){
        var tasksArr = this.state.tasks;
        tasksArr.push({
            id: this.incrementId(),
            todo: newText
        }); // Updating the item at i index
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    editList: function(newText, i){
        var tasksArr = this.state.tasks;
        tasksArr[i].todo = newText; // Updating the item at i index
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    deleteFromList: function(i){
        var tasksArr = this.state.tasks;
        tasksArr.splice(i, 1); // Deleting an item from index i
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    eachTask: function(task, i){
        // Each tasks moved from render to a new function to keep render function simpler with less code
        return (
            React.createElement(ToDo, {key: task.id, index: i, onEdit: this.editList, onDelete: this.deleteFromList}, task.todo)
        );
    },
    render: function() {
        return (
            React.createElement("div", {className: "todo-list"}, 
                this.state.tasks.map(this.eachTask), 
                React.createElement("button", {className: "btn btn-sm btn-success glyphicon glyphicon-plus", onClick: this.addToList.bind(null, "New Task")})
            )
        ) /* The bind event is to pass default placeholder for the first time we add a task */
    }
});

React.render(React.createElement(ToDoList, {count: 10}), document.getElementById('react-component'));