import React, { Component } from "react";

// Task 2
// Create component. It should render blocks for each element in "list" field and one for "text" field.
// List-element block should contains list-element id.
// When you hover mouse on the list-element block, the list-element text should appear in text block
// When you move mouse from the list-element block, the list-element text should disappear from text block
// For correct test passing give list-element block class "element" and give text block class "text"

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

    render() {
        return null;
    }
}
