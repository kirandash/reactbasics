var BGComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <p>{this.props.children}</p>
            </div>
        );
    }
});
React.render(<div><BGComponent title="Kiran Kumar Dash" subtitle="UI Develoepr">5 years experience</BGComponent><BGComponent title="MS Dhoni" subtitle="Cricketer">A legendary Cricketer</BGComponent><BGComponent  title="Steve Jobs" subtitle="CEO">Founder of Apple</BGComponent></div>, document.getElementById('react-component'));