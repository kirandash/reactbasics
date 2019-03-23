var BGComponent = React.createClass({displayName: "BGComponent",
    render: function() {
        return (
            React.createElement("h1", null, this.props.title)
        );
    }
});
React.render(React.createElement("div", null, React.createElement(BGComponent, {title: "Kiran Kumar Dash"}), React.createElement(BGComponent, null), React.createElement(BGComponent, null)), document.getElementById('react-component'));