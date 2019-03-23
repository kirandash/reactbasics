var BGComponent = React.createClass({displayName: "BGComponent",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.props.title), 
                React.createElement("h2", null, this.props.subtitle)
            )
        );
    }
});
React.render(React.createElement("div", null, React.createElement(BGComponent, {title: "Kiran Kumar Dash", subtitle: "UI Develoepr"}), React.createElement(BGComponent, {title: "MS Dhoni", subtitle: "Cricketer"}), React.createElement(BGComponent, {title: "Steve Jobs", subtitle: "CEO"})), document.getElementById('react-component'));