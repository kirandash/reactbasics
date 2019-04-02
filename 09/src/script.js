var Box = React.createClass({
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
            <div>
                <div style={this.props}></div>
                <section style={this.props}></section>
            </div>
        );
    }
});
React.render(<Box/>, document.getElementById('react-component'));

var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function(){
    React.unmountComponentAtNode(document.body);
    console.log("component is now fully unmounted");
}