var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Kiran Kumar Dash</h1>
                <p>UI Developer</p>
            </div>
        );
    }
});
React.render(<HelloWorld/>, document.body);