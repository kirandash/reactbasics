var ToDo = React.createClass({
    getInitialState: function(){
        // Allows us to set a default state for our node
        return {editing: false} // Initially we want the default card 
    },
    componentWillMount: function(){
        // A react fn that triggers right before the first render
        this.style = {
            right: this.randomNumber(0, window.innerWidth - 250 ) + 'px',
            top: this.randomNumber(50, window.innerHeight - 300 ) + 'px', // 250 = 200 height + margin on both sides of 25, additional 50 because of the title at top right corner
            transform: 'rotate(' + this.randomNumber(-15, 15) + 'deg)'
        };
    },
    componentDidMount: function(){
        // Immediately after our component is rendered - Create draggable items of todo with jQuery UI
        $(this.getDOMNode()).draggable();
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
            <div className="todo" style={this.style}>
                <h3>{this.props.children}</h3>
                <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
                <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
            </div>
        )
    },
    renderForm: function() {
        return (
            <div className="todo" style={this.style}>
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
        // Return empty tasks at load
        return {
            tasks: []
        }
    },
    incrementId: function() {
        this.id  = this.id || 3;
        return this.id++;
    },
    componentWillMount: function(){
        var self = this;
        if(this.props.count){
            // jQuery getJSON to get JSON from an api
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" + this.props.count + "&start-with-lorem=1&callback=?", function(results){
                // Callback fn
                results[0].split('. ').forEach(function(sentence){
                    self.addToList(sentence.substring(0, 40));
                })
            });
        }
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
            <ToDo key={task.id} index={i} onEdit={this.editList} onDelete={this.deleteFromList}>{task.todo}</ToDo>
        );
    },
    render: function() {
        return (
            <div className="todo-list">
                {this.state.tasks.map(this.eachTask)}
                <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.addToList.bind(null, "New Task")}></button> 
            </div>
        ) /* The bind event is to pass default placeholder for the first time we add a task */
    }
});

React.render(<ToDoList count={50}/>, document.getElementById('react-component'));