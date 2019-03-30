var CheckBox = React.createClass({displayName: "CheckBox",
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
            React.createElement("div", null, 
                React.createElement("input", {type: "checkbox", onChange: this.handleCheck, defaultChecked: this.state.checked}), 
                React.createElement("p", null, "This box is ", msg)
            )
        );
    }
});
React.render(React.createElement(CheckBox, null), document.getElementById('react-component'));