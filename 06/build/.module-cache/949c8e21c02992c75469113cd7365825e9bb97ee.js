var ToDo = React.createClass({displayName: "ToDo",
    getInitialState: function(){
        // Allows us to set a default state for our node
        return {editing: false} // Initially we want the default card 
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
            React.createElement("div", {className: "todo"}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil", onClick: this.edit}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash", onClick: this.delete})
            )
        )
    },
    renderForm: function() {
        return (
            React.createElement("div", {className: "todo"}, 
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
        this.setState({editing: false});
    },
    delete: function() {
        console.log('Task deleted!');
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
    render: function() {
        return (
            React.createElement("div", {className: "todo-list"}, 
                this.props.count
            )
        )
    }
});

React.render(React.createElement(ToDoList, {count: 10}), document.getElementById('react-component'));