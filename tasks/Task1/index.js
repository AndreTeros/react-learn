import React, { Component } from "react";

// Task 1
// Create component. It should send request to backend and then render "block#1" with result.
// Component should show "block#2" while waiting response.

// block#1
/*
<div className="row">
    {this.state.list.map((elem) => (
        <div key={elem.id} className="col col-3 border">
            id - {elem.id}<br/>
            name - {elem.name}<br/>
            note - {elem.note}<br/>
        </div>
    ))}
</div>
*/

// block#2
/*
<div className="col border">
    <p>Loading...</p>
</div>
*/

// request example
/*
fetch('http://localhost:3000/list')
    .then(response => response.json())
    .then(result => {});
*/


export default class Task1 extends Component {
    render() {
        return null;
    }
}
