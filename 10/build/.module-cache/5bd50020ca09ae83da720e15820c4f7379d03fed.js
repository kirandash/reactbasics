var BGComponent = React.createClass({displayName: "BGComponent",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.props.title), 
                React.createElement("h2", null, this.props.subtitle), 
                React.createElement("p", null, this.props.children)
            )
        );
    }
});
React.render(React.createElement("div", null, React.createElement(BGComponent, {title: "Kiran Kumar Dash", subtitle: "UI Develoepr"}, "5 years experience"), React.createElement(BGComponent, {title: "MS Dhoni", subtitle: "Cricketer"}, "A legendary Cricketer"), React.createElement(BGComponent, {title: "Steve Jobs", subtitle: "CEO"}, "Founder of Apple")), document.getElementById('react-component'));