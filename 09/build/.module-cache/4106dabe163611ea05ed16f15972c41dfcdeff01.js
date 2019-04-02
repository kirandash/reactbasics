var CheckBox = React.createClass({displayName: "CheckBox",
    getInitialState: function(){
        return {checked: false}
    },
    handleCheck: function(){
        this.setState({checked: !this.state.checked});
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "checkbox", onChange: this.handleCheck}), 
                React.createElement("p", null)
            )
        );
    }
});
React.render(React.createElement(CheckBox, null), document.getElementById('react-component'));