var News = React.createClass({displayName: "News",
    render: function() {
        return (
            React.createElement("div", {className: "news"}, 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil"}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash"})
            )
        )
    }
});

React.render(React.createElement(News, null, "Breaking News Content"), document.getElementById('react-component'));