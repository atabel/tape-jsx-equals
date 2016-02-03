import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from '../src';

const test = addAssertions(tape, jsxEquals);
const renderer = createRenderer();

const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};

test('MyComponent is properly rendered', (t) => {
    renderer.render(<MyComponent color="red" />);
    const result = renderer.getRenderOutput();

    t.jsxEquals(result, <div className="box color-red"></div>);
    t.end();
});

test('jsxNotEquals', (t) => {
    renderer.render(<MyComponent color="blue" />);
    const result = renderer.getRenderOutput();

    t.jsxNotEquals(result, <div className="box color-red"></div>);
    t.end();
});

test('jsxIncludes', (t) => {
    renderer.render(<MyComponent color="red" />);
    const result = renderer.getRenderOutput();

    t.jsxIncludes(result, <div><div className="box color-red"></div></div>);
    t.end();
});

test('jsxNotIncludes', (t) => {
    renderer.render(<MyComponent color="blue" />);
    const result = renderer.getRenderOutput();

    t.jsxNotIncludes(result, <div><div className="box color-red"></div></div>);
    t.end();
})
