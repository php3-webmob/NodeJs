import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './view/welcome';

class App extends React.Component {
    //  Constructor-Stat-Prop
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    //  Rendering Data
    render() {
        return <Welcome/>;
    }
}

//  Using ReactDom Data will be send to html or any front-view files
ReactDom.render(
    <App/>,
    document.getElementById("main")
);