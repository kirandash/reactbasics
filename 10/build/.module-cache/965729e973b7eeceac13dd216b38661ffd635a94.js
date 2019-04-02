var bGComponent = React.createClass({displayName: "bGComponent",
    render: function() {
        return (
            React.createElement("div", null, "This is a new react component.")
        );
    }
});
React.render(React.createElement("bGComponent", null), document.getElementById('react-component'));