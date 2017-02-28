import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
var VipBox = require('./components/VipBox.js');

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
          <div className="app">
              <VipBox />
          </div>
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);