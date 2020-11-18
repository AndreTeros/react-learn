import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import 'regenerator-runtime/runtime';
import { act, scryRenderedDOMComponentsWithClass, renderIntoDocument, Simulate } from "react-dom/test-utils";

import Task2 from "./../app/Task2";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("task2", () => {
    act(() => {
        render(<Task2/>, container);
    });

    let root = renderIntoDocument(
        <Task2 />
    );

    let elements = scryRenderedDOMComponentsWithClass(root, 'element');
    let textBlock = scryRenderedDOMComponentsWithClass(root, 'text');

    expect(container.textContent).toBe("id - 1id - 2id - 3");
    expect(textBlock[0].textContent).toBe("");

    Simulate.mouseOver(elements[1]);
    expect(textBlock[0].textContent).toBe("bbbb");

    Simulate.mouseOver(elements[2]);
    expect(textBlock[0].textContent).toBe("cccc");

    Simulate.mouseOut(elements[2]);
    expect(textBlock[0].textContent).toBe("");
});
