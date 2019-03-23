var BGComponent = React.createClass({
    render: function() {
        return (
            <div>This is a new react component.</div>
        );
    }
});
React.render(<div><BGComponent/><BGComponent/><BGComponent/></div>, document.getElementById('react-component'));