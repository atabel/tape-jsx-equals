# tape-jsx-equals

[![npm](https://img.shields.io/npm/v/tape-jsx-equals.svg)](https://www.npmjs.com/package/tape-jsx-equals)
[![npm](https://img.shields.io/npm/l/tape-jsx-equals.svg)](https://www.npmjs.com/package/tape-jsx-equals)

[Tape](https://github.com/substack/tape) [extension](https://github.com/atabel/extend-tape) to compare React components.

`tape-jsx-equals` uses [`react-element-to-jsx-string`](https://github.com/algolia/react-element-to-jsx-string) to compare
the component rendered output with the expected output.

## Install
```
$ npm install --save-dev extend-tape
$ npm install --save-dev tape-jsx-equals
```
## How to use

Testing React components is very easy with `tape` + `tape-jsx-equals`:

```javascript
const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};
```

```javascript
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import MyComponent from '../MyComponent';

// extend tape with jsxEqual assertion:
const test = addAssertions(tape, {jsxEquals});

test('MyComponent is properly rendered', (t) => {
	const renderer = createRenderer();
    renderer.render(<MyComponent color="red" />);
    const result = renderer.getRenderOutput();

	// compare output with the expected result:
    t.jsxEquals(result, <div className="box color-red"></div>);
    t.end();
});
```

## Run tests
```
$ npm install
$ npm test
```
