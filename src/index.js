import reactElementToJsxString from 'react-element-to-jsx-string';

export default function jsxEquals (a, b, msg) {
    this.equals(reactElementToJsxString(a), reactElementToJsxString(b), msg);
}
