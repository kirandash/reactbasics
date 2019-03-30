var ToDo = React.createClass({
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
            <div className="todo">
                <h3>{this.props.children}</h3>
                <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
                <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
            </div>
        )
    },
    renderForm: function() {
        return (
            <div className="todo">
                <textarea defaultValue={this.props.children} ref="savedText" className="form-control"></textarea>
                <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
            </div>
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
var ToDoList = React.createClass({
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
                'Attend morning stand up calls',
                'Push code to production',
                'Attend evening meetings',
                'Go Gym'
            ]
        }
    },
    editList: function(newText, i){
        var tasksArr = this.state.tasks;
        tasksArr[i] = newText; // Updating the item at i index
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
            <ToDo key={i} index={i} onEdit={this.editList} onDelete={this.deleteFromList}>{task}</ToDo>
        );
    },
    render: function() {
        return (
            <div className="todo-list">
                {this.state.tasks.map(this.eachTask)}
            </div>
        )
    }
});

React.render(<ToDoList count={10}/>, document.getElementById('react-component'));