var Box = React.createClass({
    componentWillMount: function(){
        console.log("component will be mounted next");
    },
    componentDidMount: function(){
        console.log("component is already mounted");
    },
    getDefaultProps: function(){
        /*return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }*/
        return {
            colorIndex: -1 // Setting default index to -1
        }
    },
    getInitialState: function(){
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },
    update: function() {
        // A custom function to increment the color index
        this.setProps({colorIndex: this.props.colorIndex + 1});
    },
    componentWillReceiveProps: function(nextProps){
        var color = this.props.colors.split(',')[nextProps.colorIndex];
        if(!color){
            this.setProps({colorIndex:0});
        }
        this.setState({backgroundColor: color});
    },
    render: function() {
        return (
            <div>
                <div style={this.state} onClick={this.update}></div>
            </div>
        );
    }
});
React.render(<Box colors="Red,Black,Grey,Blue" />, document.getElementById('react-component'));

var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function(){
    React.unmountComponentAtNode(document.body);
    console.log("component is now fully unmounted");
}