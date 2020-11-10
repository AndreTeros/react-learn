import React, { Component } from "react";

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/list')
            .then(response => response.json())
            .then(result => this.setState({list: result}));
    }

    render() {
        if (this.state.list === null) {
            return (
                <div className="col border">
                    <p>Loading...</p>
                </div>
            )
        }

        return (
            <div className="row">
                {this.state.list.map((elem) => (
                    <div key={elem.id} className="col col-3 border">
                        id - {elem.id}<br/>
                        name - {elem.name}<br/>
                        note - {elem.note}<br/>
                    </div>
                ))}
            </div>
        );
    }
}
