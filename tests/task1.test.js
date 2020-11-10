import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import 'regenerator-runtime/runtime';
import { act } from "react-dom/test-utils";

import Task1 from "./../app/Task1";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    const fakeData = [
        {id: 1, name: "aaa", note: "123"},
    ];

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(fakeData)
    }));
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;

    global.fetch.mockRestore();
});


it("task1", async () => {
    act(() => {
        render(<Task1/>, container);
    });
    expect(container.textContent).toBe("Loading...");

    await act(async () => {
        render(<Task1/>, container);
    });

    expect(container.textContent).toBe("id - 1name - aaanote - 123");
});
