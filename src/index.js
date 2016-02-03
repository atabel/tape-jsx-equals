import reactElementToJsxString from 'react-element-to-jsx-string';

let api = {
    jsxEquals (a, b, msg) {
        this.equals(reactElementToJsxString(a), reactElementToJsxString(b), msg);
    },
    jsxNotEquals (a, b, msg) {
        this.notEquals(reactElementToJsxString(a), reactElementToJsxString(b), msg);
    },
    jsxIncludes (a, b, msg) {
        this.true(reactElementToJsxString(b).includes(reactElementToJsxString(a)));
    },
    jsxNotIncludes (a, b, msg) {
        this.false(reactElementToJsxString(b).includes(reactElementToJsxString(a)));
    }
}

export default api;
