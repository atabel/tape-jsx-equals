import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from '..';

const test = addAssertions(tape, {jsxEquals});
const renderer = new ReactShallowRenderer();

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
