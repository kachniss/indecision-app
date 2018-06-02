class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;

// const onButton = () => {
//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onButton}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }
// renderApp();