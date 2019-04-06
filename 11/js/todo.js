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