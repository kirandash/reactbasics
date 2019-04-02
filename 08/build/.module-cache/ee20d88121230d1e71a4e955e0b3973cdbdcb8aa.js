var Box = React.createClass({displayName: "Box",
    componentWillMount: function(){
        console.log("component will be mounted next");
    },
    componentDidMount: function(){
        console.log("component is already mounted");
    },
    render: function() {
        return (
            React.createElement("div", null
            )
        );
    }
});
React.render(React.createElement(Box, null), document.getElementById('react-component'));