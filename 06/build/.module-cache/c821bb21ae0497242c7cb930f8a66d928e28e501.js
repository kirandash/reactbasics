var News = React.createClass({displayName: "News",
    render: function() {
        return (
            React.createElement("div", {className: "todo"}, 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil"}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash"})
            )
        )
    }
});

React.render(React.createElement(News, null, "Today's target"), document.getElementById('react-component'));