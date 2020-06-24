import React from 'react';

import './App.css';
import Hello from './Hello';

function App(props) {
return <div>
    <center>This is My first {props.name}</center>
<br/>
<Hello Firstname="2020"></Hello></div>
}

export default App;
