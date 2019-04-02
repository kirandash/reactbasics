var CheckBox = React.createClass({
    getInitialState: function(){
        return {checked: true}
        // return {checked: false}
    },
    handleCheck: function(){
        this.setState({checked: !this.state.checked});
    },
    render: function() {
        var msg;
        if(this.state.checked){
            msg = "checked";
        }else{
            msg = "unchecked";
        }
        return (
            <div>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
                <p>This box is {msg}</p>
            </div>
        );
    }
});
React.render(<CheckBox/>, document.getElementById('react-component'));