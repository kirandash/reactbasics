var myComponent = React.createClass({displayName: "myComponent",
    render: function() {
        return (
            React.createElement("div", null, "This is a new react component.")
        );
    }
});
React.render(React.createElement("myComponent", null), document.getElementById('react-component'));