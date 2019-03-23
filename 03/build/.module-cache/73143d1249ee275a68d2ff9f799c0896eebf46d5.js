var HelloWorld = React.createClass({displayName: "HelloWorld",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Kiran Kumar Dash"), 
                React.createElement("p", null, "UI Developer")
            )
        );
    }
});
React.render(React.createElement(HelloWorld, null), document.body);