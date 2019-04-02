var Box = React.createClass({displayName: "Box",
    componentWillMount: function(){
        console.log("component will be mounted next");
    },
    componentDidMount: function(){
        console.log("component is already mounted");
    },
    getDefaultProps: function(){
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("div", {style: this.props}), 
                React.createElement("section", {style: this.props})
            )
        );
    }
});
React.render(React.createElement(Box, null), document.getElementById('react-component'));

var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function(){
    React.unmountComponentAtNode(document.body);
    console.log("component is now fully unmounted");
}