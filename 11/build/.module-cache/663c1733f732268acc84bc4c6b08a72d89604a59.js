var News = React.createClass({displayName: "News",
    render: function() {
        return (
            React.createElement("div", {className: "news"})
        )
    }
});

React.render(React.createElement(News, null, "Breaking News Content"), document.getElementById('react-component'));