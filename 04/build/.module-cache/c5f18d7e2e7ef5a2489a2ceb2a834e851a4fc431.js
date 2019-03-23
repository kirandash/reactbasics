var MyComponent = React.createClass({displayName: "MyComponent",
    render: function() {
        return (
            React.createElement("div", null, "This is a new react component.")
        );
    }
});
React.render(React.createElement(MyComponent, null), document.getElementById('react-component'));