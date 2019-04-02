var Box = React.createClass({displayName: "Box",
    componentWillMount: function(){
        alert("component will be mounted next");
    },
    componentDidMount: function(){
        alert("component is already mounted");
    },
    render: function() {
        return (
            React.createElement("div", null
            )
        );
    }
});
React.render(React.createElement(Box, null), document.getElementById('react-component'));