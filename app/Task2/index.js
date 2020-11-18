import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    text: "aaaa"
                },
                {
                    id: 2,
                    text: "bbbb"
                },
                {
                    id: 3,
                    text: "cccc"
                },
            ],
            text: ''
        };
    }

    changeText = (text) => {
        this.setState({text});
    }

    clearText = () => {
        this.setState({text: ''});
    }

    render() {
        const {list, text} = this.state;
        return (
            <div className="row">
                {list.map((elem) => (
                    <div
                        key={elem.id}
                        className="col col-3 border element"
                        onMouseOver={() => this.changeText(elem.text)}
                        onMouseOut={() => this.clearText()}
                    >
                        id - {elem.id}
                    </div>
                ))}

                <div className="row text">{text}</div>
            </div>
        );
    }
}
