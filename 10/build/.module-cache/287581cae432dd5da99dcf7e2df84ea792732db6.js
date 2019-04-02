var BGComponent = React.createClass({displayName: "BGComponent",
    render: function() {
        return (
            React.createElement("div", null, "This is a new react component.")
        );
    }
});
React.render(React.createElement("div", null, React.createElement(BGComponent, null), React.createElement(BGComponent, null), React.createElement(BGComponent, null)), document.getElementById('react-component'));